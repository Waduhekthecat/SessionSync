import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Track from '../track/Track';

interface TrackData {
  id: string;
}

const TracksPanel: React.FC = () => {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  // Refs array for tracks — will be updated on each render
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Whenever tracks change, reset the refs array length accordingly
  useEffect(() => {
    trackRefs.current = trackRefs.current.slice(0, tracks.length);
  }, [tracks]);

  const handleSelectTrack = (id: string) => {
    setSelectedTrackId(id);
  };

  const addTrack = () => {
    const newTrack: TrackData = {
      id: crypto.randomUUID(),
    };
    setTracks((prev) => [...prev, newTrack]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    // Check if click is inside any of the track refs
    const clickedInsideTrack = trackRefs.current.some(ref => ref?.contains(target));

    if (!clickedInsideTrack) {
      setSelectedTrackId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedTrackId) {
        setTracks((prevTracks) => prevTracks.filter(track => track.id !== selectedTrackId));
        setSelectedTrackId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTrackId]);

  return (
    <TracksContainer>
      {tracks.map((track, index) => (
        <Track
          key={track.id}
          id={track.id}
          number={index + 1}
          isSelected={track.id === selectedTrackId}
          onSelect={handleSelectTrack}
          ref={(el) => {
            trackRefs.current[index] = el;
          }}
        />
      ))}
      <AddTrackButton onClick={addTrack}>+ Add New Track</AddTrackButton>
    </TracksContainer>
  );
};

const TracksContainer = styled.div`
  grid-area: 4 / 1 / 5 / 6;
  height: 100%;
  width: 100%;
  background-color: #1C1C1C;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 1px;
  text-align: center;
`;

const AddTrackButton = styled.div`
  color:rgb(61, 187, 255);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  opacity: 70%;
  display: inline-block;
  padding: 10px;        
  width: auto;            
  &:hover {
    text-decoration: underline;
    opacity: 90%;
    transform: scale(1.1);

  }
`;

export default TracksPanel;
