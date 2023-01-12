import React, { useState, useEffect, useRef } from 'react';

import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

const ScrollHandler = () => {
       const [scrollPosition, setScrollPosition] = useState(0);
       const scrollRef = useRef(scrollPosition);

       const updateScroll = () => {
           setScrollPosition(scrollRef.current.scrollTop);
       };

       useEffect(() => {
           scrollRef.current.addEventListener('scroll', updateScroll);
       });

       const goToBottom = () => {
           scrollRef.current.scrollTo({ top: 200, behavior: 'smooth' });
       };

       const goToTop = () => {
           scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
       };

       return (
                   {resultInfo.data.length > 5 && scrollPosition < 50 ? (
                        <ArrowCircleDownRoundedIcon
                            className='downArrowIcon'
                            onClick={goToBottom}
                        />
                    ) : resultInfo.data.length > 5 && scrollPosition > 50 ? (
                        <ArrowCircleUpRoundedIcon
                            className='downArrowIcon'
                            onClick={goToTop}
                        />
                    ) : (
                        <> </>
                    )}
       )
};

export default ScrollHandler;
