/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { Slider } from "../ui/slider"
import { Button } from "../ui/button"
import { ArrowLeftCircle, LucideVolume1, LucideVolume2, LucideVolumeX, Maximize, Minimize, Pause, Play, RotateCcwIcon, RotateCwIcon, Volume, Volume1, Volume1Icon, Volume2, Volume2Icon, VolumeOff, VolumeX } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const VideoPlayer = ({ width = '640px', height = "390px", videoUrl }) => {
    const [playing, setPlaying] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(false)
    const [played, setPlayed] = useState(0)
    const [seeking, setSeeking] = useState(false)
    const [showControls, setShowControls] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)

    const [showIconTop, setShowIconTop] = useState(false)
    const [firstRender, setFirstRender] = useState(true)
    const [playerFocus, setPlayerFocus] = useState(false)
    const [currentIconState, setCurrentIconState] = useState(null)

    const playerRef = useRef(null)
    const playerContainerRef = useRef(null)

    const handlePlayAndPause = () => {
        setPlaying(prev => {
            const newState = !prev;
            setCurrentIconState(newState ? <Pause /> : <Play />);
            return newState;
        });
    }

    const handleProgress = (state) => {
        if (!seeking) {
            setPlayed(state.played)
        }
    }

    const handleSeekChange = (newValue) => {
        setPlayed(newValue)
        setSeeking(true)
    }

    const handleSeekMouseUp = () => {
        setSeeking(false)
        playerRef.current.seekTo(played)
    }

    const handleRewind = () => {
        playerRef.current?.seekTo(playerRef.current.getCurrentTime() - 5)
        setCurrentIconState(<Volume />)
    }

    const handleForward = () => {
        playerRef.current?.seekTo(playerRef.current.getCurrentTime() + 5)
        setCurrentIconState(<Volume />)
    }

    const handleToggleMute = () => {
        setMuted(!muted)
    }

    const handleVolumeChange = (newValue) => {
        setVolume(newValue[0])
    }

    const handleFullScreen = useCallback(() => {
        if (!isFullScreen) {
            if (playerContainerRef.current.requestFullscreen) {
                playerContainerRef.current.requestFullscreen()
                setIsFullScreen(true)
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
                setIsFullScreen(false)
            }
        }
    }, [isFullScreen])

    const handleKeyDown = (e) => {
        if (!playerFocus) return

        setShowControls(true)

        switch (e.key) {
            case ' ':
                e.preventDefault()
                handlePlayAndPause()
                break;

            case 'ArrowUp':
                e.preventDefault()
                setCurrentIconState(<Volume />)
                setVolume(prev => Math.min(prev + 0.1, 1))
                break;

            case 'ArrowDown':
                e.preventDefault()
                setCurrentIconState(<Volume />)
                setVolume(prev => Math.max(prev - 0.1, 0))
                break;

            case 'ArrowLeft':
                e.preventDefault()
                handleRewind()
                break;

            case 'ArrowRight':
                e.preventDefault()
                handleForward()
                break;

            case 'm':
                setMuted(prev => !prev)
                break;

            case 'f':
                handleFullScreen()
                break;

            default:
                break;
        }
    }


    const pad = (time) => {
        return ("0" + time).slice(-2)
    }

    const formatTime = (seconds) => {
        const date = new Date(seconds * 1000)
        const hh = date.getUTCHours(seconds)
        const mm = date.getUTCMinutes(seconds)
        const ss = date.getUTCSeconds(seconds)

        if (hh) {
            return `${hh}:${pad(mm)}:${ss}`
        }
        return `${pad(mm)}:${pad(ss)}`
    }

    // if it is the first render, don't show the pause icon on top of the player with
    // this useEffect
    useEffect(() => {
        if (firstRender === true && playing === true) setFirstRender(false)

        if (firstRender === false) {
            setShowIconTop(true)
            const timer = setTimeout(() => {
                setShowIconTop(false)
            }, 500);

            return () => clearTimeout(timer)
        }

    }, [firstRender, playing, muted, volume])

    // handle full screen change
    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(document.fullscreenElement)
        }
        document.addEventListener("fullscreenchange", handleFullScreenChange)

        return () => document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }, [isFullScreen])

    // to hide controls after 3 seconds of inactivity
    useEffect(() => {
        if (showControls) {
            const timer = setTimeout(() => {
                setShowControls(false)
            }, 2000);
            return () => clearTimeout(timer)
        }
    }, [showControls])

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [playerFocus])


    return (
        <div
            tabIndex={0}
            ref={playerContainerRef}
            className={`relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden object-contain transition duration-300 select-none  ${isFullScreen ? "w-screen h-screen" : ""} ${!showControls ? 'cursor-none' : ''}`}
            style={{ width, height }}
            onMouseMove={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onFocus={() => setPlayerFocus(true)}
            onBlur={() => setPlayerFocus(false)}
        >
            <ReactPlayer
                ref={playerRef}
                className="absolute top-0 left-0"
                width={'100%'}
                height={'100%'}
                url={videoUrl}
                playing={playing}
                volume={volume}
                muted={muted}
                onProgress={handleProgress}
                onEnded={handlePlayAndPause}
                onClick={handlePlayAndPause}
            />

            {/* to show a play or pause icon  on top of the video like youtube*/}
            <AnimatePresence>
                {
                    showIconTop && (
                        <motion.div className="absolute top-0 left-0 w-full h-full  bg-gray-800 bg-opacity-60 flex items-center justify-center"
                            onClick={handlePlayAndPause}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: .6 } }}
                            transition={{ duration: 0.1 }}
                        >
                            <motion.div
                                initial={{ scale: 0.3 }}
                                animate={{ scale: 1, transition: { duration: .2 } }}
                                exit={{ opacity: 0, scale: 0.4 }}
                                transition={{ duration: .5 }}>
                                <Button size="icon" className="bg-slate-600">
                                    {/* {playing ? <Play className="h-8 w-8" /> : <Pause className="h-8 w-8" />} */}
                                    {currentIconState}
                                </Button>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <AnimatePresence>
                {
                    showControls && <motion.div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 bg-opacity-70 transition-opacity  select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: .2 } }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .6 }}>
                        <Slider
                            value={[played * 100]}
                            max={100}
                            step={0.1}
                            className="mb-4 bg-gray-900"
                            onValueChange={value => handleSeekChange([value[0] / 100])}
                            onValueCommit={handleSeekMouseUp}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 ">
                                {/* play pause icon */}
                                <Button onClick={handlePlayAndPause} variant="ghost" size="icon"
                                    className="text-white hover:bg-gray-700 hover:text-gray-300">
                                    {
                                        playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />
                                    }
                                </Button>

                                {/* rewind icon */}
                                <Button onClick={handleRewind} variant="ghost" size="icon"
                                    className="text-white hover:bg-gray-700 hover:text-gray-300">
                                    <RotateCcwIcon className="w-5 h-5" />
                                </Button>

                                {/* forward icon */}
                                <Button onClick={handleForward} variant="ghost" size="icon"
                                    className="text-white hover:bg-gray-700 hover:text-gray-300">
                                    <RotateCwIcon className="w-5 h-5" />
                                </Button>

                                {/* toggle mute and unmute */}
                                <Button onClick={handleToggleMute} variant="ghost" size="icon"
                                    className="text-white hover:bg-gray-700 hover:text-gray-300">
                                    {
                                        muted || volume === 0 ? <LucideVolumeX /> : volume <= .5 ? <Volume1 /> : <Volume2 />
                                    }
                                </Button>

                                <Slider
                                    value={[volume * 100]}
                                    max={100}
                                    step={1}
                                    onValueChange={value => handleVolumeChange([value[0] / 100])}
                                    className="w-16 bg-black"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                {
                                    playerRef.current?.getDuration() && (
                                        <div className="text-white">
                                            {formatTime(played * playerRef.current?.getDuration() || 0)}
                                            {" / "}
                                            {formatTime(playerRef.current?.getDuration() || 0)}
                                        </div>
                                    )
                                }
                                <Button size="icon" variant="ghost" className="text-white hover:bg-gray-200"
                                    onClick={handleFullScreen}
                                >
                                    {
                                        isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />
                                    }
                                </Button>
                            </div>

                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div >
    )
}

export default VideoPlayer