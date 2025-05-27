import React from 'react';
import { Box, Typography } from '@mui/material';

const ActiveDashboardItem = () => {
  return (
    <Box
      sx={{
        height: '100%',
        padding: 2,
        backgroundColor: '#e0e0e0',
      }}
    >
      <Typography variant="h4">Active Dashboard View</Typography>
      <Typography>This section stretches to full height.</Typography>
    </Box>
  );
};

export default ActiveDashboardItem;
