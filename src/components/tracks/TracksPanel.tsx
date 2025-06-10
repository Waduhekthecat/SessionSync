import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Track from './Track';

interface TrackData {
  id: string;
  isMute: boolean;
  isSolo: boolean;
  isSoloMute: boolean;
}


const TracksPanel: React.FC = () => {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const isAnySoloed = tracks.some(track => track.isSolo);

  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const soloActive = tracks.some(track => track.isSolo);

  const addTrack = () => {
    setTracks((prev) => {

      const newTrack: TrackData = {
        id: crypto.randomUUID(),
        isMute: false,
        isSoloMute: false,
        isSolo: false
      };

      return [...prev, newTrack];
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    const clickedInsideTrack = trackRefs.current.some(ref => ref?.contains(target));

    if (!clickedInsideTrack) {
      setSelectedTrackId(null);
    }
  };

  const handleFXClick = (trackId: string) => {
  console.log("FX clicked for track", trackId);
  // Show your plugin manager modal or whatever
};

  const toggleMute = (id: string) => {
    setTracks((prev) =>
      prev.map((track) =>
        track.id === id ? { ...track, isMute: !track.isMute, isSolo: false } : track
      )
    );
    console.log("Track ", { id }, "is toggling mute");
  };

  const toggleSolo = (id: string) => {
    console.log("Track ID: ", {id}, " solo toggled")
  };

  // Whenever tracks change, reset the refs array length accordingly
  useEffect(() => {
    trackRefs.current = trackRefs.current.slice(0, tracks.length);
  }, [tracks]);

  const handleSelectTrack = (id: string) => {
    setSelectedTrackId(id);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

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
          isMute={track.isMute}
          isSolo={track.isSolo}
          onSelect={handleSelectTrack}
          onToggleMute={() => toggleMute(track.id)}
          onToggleSolo={() => toggleSolo(track.id)}
          onFXClick={() => handleFXClick(track.id)}

          ref={(el) => {
            trackRefs.current[index] = el;
          }}
        />
      ))}
      <AddTrackButton onClick={addTrack}>+ Add New Track</AddTrackButton>
    </TracksContainer>
  );
};

export default TracksPanel;


const TracksContainer = styled.div`
  grid-area: 4 / 1 / 5 / 6;
  max-height: 100%;
  overflow-y: scroll;  
  overflow-x: hidden;
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
  padding: 12px;        
  width: auto;            
  &:hover {
    text-decoration: underline;
    opacity: 90%;
    transform: scale(1.1);

  }
`;