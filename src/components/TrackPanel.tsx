// TrackPanel.jsx
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const TrackPanel = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ padding: 2 }}>
      <Grid>
        <Box sx={{ backgroundColor: '#8D8D8D', padding: 2 }}>
          <Typography variant="h6">Track 1</Typography>
        </Box>
      </Grid>
      <Grid>
        <Box sx={{ backgroundColor: '#8D8D8D', padding: 2 }}>
          <Typography variant="h6">Track 2</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TrackPanel;
