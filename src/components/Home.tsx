import { useState } from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Divider, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";

import LogoWhite from '../assets/logo-white.svg';
import DarkGradient from '../assets/gradients/dark-shell.jpeg';
import YellowBlueGradient from '../assets/gradients/yellow-blue.jpg';

const Home = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery('(max-width:768px)');
    const [view, setView] = useState<'home' | 'events' | 'contact'>('home');

    if (isMobile) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    p: '0 2rem 0 2rem',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
                }}
            >
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column', 
                    gap: '2rem', 
                    m: '2rem 0 0 0'
                }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '10rem',
                            padding: '2rem',
                            backgroundImage: `url(${theme.palette.mode === 'dark' ? DarkGradient : YellowBlueGradient})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <img 
                            src={LogoWhite} 
                            alt="Logo" 
                            style={{ 
                                width: '2.5rem', 
                                height: '2.5rem',
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem',
                            }} 
                        />
                    </Box>
                </Box>
                <Typography
                    sx={{
                        width: '50%',
                        fontFamily: 'Italiana',
                        fontSize: '4rem',
                        lineHeight: 1.1,
                        margin: '2rem 0 0 0',
                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    }}
                >
                    Atlanta Founder Residency
                </Typography>
                <Typography sx={{ 
                    fontFamily: 'Italiana', 
                    fontSize: '2.25rem',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                    m: '2rem 0 0 0',
                }}>
                    Our Mission
                </Typography>
                <Typography sx={{ 
                    fontWeight: 300, 
                    m: '0.5rem 0 1rem 0', 
                    fontSize: '1.25rem', 
                    maxWidth: '90%' 
                }}>
                    To empower early-stage founders through meaningful connections, shared resources, and collaborative learning, while fostering a culture of humility, kindness, and genuine support in the entrepreneurial journey.
                </Typography>
                <Typography sx={{ 
                    fontFamily: 'Italiana', 
                    fontSize: '2.25rem',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                    m: '2rem 0 0rem 0' 
                }}>
                    Our Vision
                </Typography>
                <Typography sx={{ 
                    fontWeight: 300, 
                    m: '0.5rem 0 2rem 0', 
                    fontSize: '1.25rem', 
                    maxWidth: '90%' 
                }}>
                    To build the most trusted and enduring founder community, where authentic relationships flourish into lifelong partnerships, and where giving freely today creates exponential impact tomorrow.
                </Typography>
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Typography
                        variant='h4'
                        sx={{
                            borderLeft: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                            p: '0 0 0 1rem',
                            margin: '2rem 0 2rem 0',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                color: theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7',
                                borderLeft: `3px solid ${theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7'}`,
                            }
                        }}
                    >
                        <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://forms.gle/xbV9nMLZYPqZrDg68" target="_blank" rel="noopener noreferrer">
                            Interest form
                        </a>
                    </Typography>
                    <ArrowOutward sx={{ fontSize: '1rem', m: '0.2rem 0 0 0.5rem' }} />
                </Box>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                maxHeight: '100vh',
                p: '0 2rem 0 2rem',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
            }}
        >
            {/* TOP HALF */}
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column', 
                gap: '2rem', 
                m: '2rem 0 0 0'
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '15rem',
                        padding: '2rem',
                        backgroundImage: `url(${theme.palette.mode === 'dark' ? DarkGradient : YellowBlueGradient})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        loading: 'lazy'
                    }}
                >
                    <img 
                        src={LogoWhite} 
                        alt="Logo" 
                        loading='lazy'
                        style={{ 
                            width: '2.5rem', 
                            height: '2.5rem',
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem',
                        }} 
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1.5rem',
                    }}
                >
                    <Typography
                        variant='h4'
                        onClick={() => setView('home')}
                        sx={{
                            borderLeft: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                            p: '0 0 0 1rem',
                            m: '0 1.5rem 0 0',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                color: theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7',
                                borderLeft: `3px solid ${theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7'}`,
                            }
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant='h4'
                        onClick={() => setView('events')}
                        sx={{
                            borderLeft: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                            p: '0 0 0 1rem',
                            m: '0 1.5rem 0 0',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                color: theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7',
                                borderLeft: `3px solid ${theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7'}`,
                            }
                        }}
                    >
                        Events
                    </Typography>
                    <Typography
                        variant='h4'
                        onClick={() => setView('contact')}
                        sx={{
                            borderLeft: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                            p: '0 0 0 1rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                color: theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7',
                                borderLeft: `3px solid ${theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7'}`,
                            }
                        }}
                    >
                        Interest form
                    </Typography>
                </Box>
            </Box>

            

            {/* BOTTOM HALF */}
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    m: { xs: '2rem 0 0 0', sm: '2rem 0 0 0' },
                    p: '0 0 2rem 0'
                }}
            >
                <Fade in={true} mountOnEnter unmountOnExit timeout={{ enter: 800, exit: 300}}>
                    <Typography
                        sx={{
                            width: '50%',
                            fontFamily: 'Italiana',
                            fontSize: { 
                                xs: '2.5rem',  // Small mobile
                                sm: '3.5rem',  // Large mobile
                                md: '5rem',    // Tablet
                                lg: '6.5rem',  // Desktop
                                xl: '7.5rem',   // Large desktop
                            },
                            maxWidth: {
                                xs: '70%',
                                sm: '50%',
                                md: '40%',
                                lg: '40%',
                                xl: '40%'
                            },
                            lineHeight: 1.1,
                            color: theme.palette.mode === 'dark' ? 'white' : 'black',
                        }}
                    >
                        Atlanta Founder Residency
                    </Typography>
                </Fade>
                <Fade in={true} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 500}}>
                    <Box sx={{ display: 'inline-flex', width: '50%', alignItems: 'center', height: '100%' }}>
                        <Divider
                            orientation="vertical"
                            flexItem sx={{
                                backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                                width: '1px',
                                height: '90%',
                                m: 'auto 4rem auto 0'
                            }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {view === 'home' && (
                                <>
                                    <Typography sx={{ 
                                        fontFamily: 'Italiana', 
                                        fontSize: { 
                                            xs: '2rem',
                                            sm: '2rem',
                                            md: '2.25rem', 
                                            lg: '2.5rem'
                                        },
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                                        m: '0 0 0.75rem 0' 
                                    }}>
                                        Our Mission
                                    </Typography>
                                    <Typography sx={{ 
                                        fontWeight: 300, 
                                        m: '0 0 1rem 0', 
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.15rem',
                                            lg: '1.25rem'
                                        }, 
                                        maxWidth: '90%' 
                                    }}>
                                        To empower early-stage founders through meaningful connections, shared resources, and collaborative learning, while fostering a culture of humility, kindness, and genuine support in the entrepreneurial journey.
                                    </Typography>
                                    <Typography sx={{ 
                                        fontFamily: 'Italiana', 
                                        fontSize: { 
                                            xs: '2rem',
                                            sm: '2rem',
                                            md: '2.25rem', 
                                            lg: '2.5rem'
                                        },
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                                        m: '0 0 0.75rem 0' 
                                    }}>
                                        Our Vision
                                    </Typography>
                                    <Typography sx={{ 
                                        fontWeight: 300, 
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.15rem',
                                            lg: '1.25rem'
                                        }, 
                                        maxWidth: '90%' 
                                    }}>
                                        To build the most trusted and enduring founder community, where authentic relationships flourish into lifelong partnerships, and where giving freely today creates exponential impact tomorrow.
                                    </Typography>
                                </>
                            )}
                            {view === 'events' && (
                                <>
                                    <Typography sx={{ 
                                        fontFamily: 'Italiana', 
                                        fontSize: { 
                                            xs: '2rem',
                                            sm: '2rem',
                                            md: '2.25rem', 
                                            lg: '2.5rem'
                                        },
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                                        m: '0 0 0.75rem 0' 
                                    }}>
                                        Coffee House
                                    </Typography>
                                    <Typography sx={{ 
                                        fontWeight: 300, 
                                        m: '0 0 1rem 0', 
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.15rem',
                                            lg: '1.25rem'
                                        }, 
                                        maxWidth: '90%' 
                                    }}>
                                        Our coffee house events bring an opportunity for founders to work together and connect in a relaxed environment. We host these quarterly on Wednesday mornings, in different locations across Atlanta. 
                                    </Typography>
                                    <Typography sx={{ 
                                        fontFamily: 'Italiana', 
                                        fontSize: { 
                                            xs: '2rem',
                                            sm: '2rem',
                                            md: '2.25rem', 
                                            lg: '2.5rem'
                                        },
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                                        m: '0 0 0.75rem 0' 
                                    }}>
                                        Happy Hour
                                    </Typography>
                                    <Typography sx={{ 
                                        fontWeight: 300, 
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.15rem',
                                            lg: '1.25rem'
                                        }, 
                                        maxWidth: '90%' 
                                    }}>
                                        Our quarterly happy hour events bring an opportunity for founders, investors, and operators to connect in a relaxed environment. We host these quarterly on Thursday evenings. 
                                    </Typography>
                                </>
                            )}
                            {view === 'contact' && (
                                <Box sx={{ m: '-11rem 0 0 0' }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Italiana', 
                                        fontSize: { 
                                            xs: '2rem',
                                            sm: '2rem',
                                            md: '2.25rem', 
                                            lg: '2.5rem'
                                        },
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black', 
                                        m: '0 0 0.75rem 0' 
                                    }}>
                                        Interest Form
                                    </Typography>
                                    <Typography sx={{ 
                                        fontWeight: 300, 
                                        m: '0 0 1rem 0', 
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.15rem',
                                            lg: '1.25rem'
                                        }, 
                                        maxWidth: '90%' 
                                    }}>
                                        Interested in learning more? Fill out our&nbsp;
                                        <Box
                                            sx={{ 
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    color: theme.palette.mode === 'dark' ? '#ff7043' : '#31BBE7',
                                                }
                                            }}
                                            onClick={() => window.open('https://forms.gle/xbV9nMLZYPqZrDg68', '_blank')}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 400, 
                                                    fontSize: {
                                                        xs: '1rem',
                                                        sm: '1.1rem',
                                                        md: '1.15rem',
                                                        lg: '1.25rem'
                                                    }
                                                }}
                                            >
                                                interest form
                                            </Typography>
                                            <ArrowOutward 
                                                sx={{
                                                    fontSize: '1rem',
                                                    m: '0.25rem 0 0 0.25rem'
                                                }}
                                            />
                                        </Box>
                                        &nbsp;to get in touch.
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Box>
    )
};

export default Home;