import { Box, CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { styled } from "@mui/material/styles";

// handle loading
const loadingSubject = new BehaviorSubject<boolean>(false);

export const toggleLoading = (value: boolean) => {
  loadingSubject.next(value);
};

const BoxOverlay = styled(Box)`
    background-color: grey;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2002;
    top: 0px;
    left: 0px;
    opacity: 0.2;
    /* in FireFox */
    filter: alpha(opacity=0.2);
`;
const LoadingCustom = styled(CircularProgress)`
    position: absolute;
    top: 45%;
    left: 49%;
    transform: translate(-50%, -50%);
    z-index: 2003;
`;




const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLoading = (value: boolean) => {
    if (value) {
      setCount((previous) => previous + 1);
    } else {
      setCount((previous) => (previous > 0 ? previous - 1 : 0));
    }
  };

  useEffect(() => {
    setIsLoading(count > 0)
  }, [count]);

  useEffect(() => {
    const subscribe = loadingSubject.subscribe((value) => {
      toggleLoading(value);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  return isLoading ? (
    <Box sx={{
      width: '100%',
      height: '100vh',
      position: 'fixed',
      zIndex: '2001',
      maxWidth: '100%'
    }}>
      <BoxOverlay />
      <LoadingCustom />
    </Box >

  ) : null;
};

export default Loading;
