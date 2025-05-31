import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '../buttons/ToggleButton';

type Playback = 'normal' | 'muted' | 'soloed' | 'solo-forced';

const ToggleFunction: React.FC = () => {
    const [playback, setPlayback] = useState<Playback>('normal');
    const [isDisabled, setIsDisabled] = useState(false);

    const muteColor = playback === 'solo-forced' ? 'light-red' : 'red';

    const handleMuteToggle = () => {
        if (playback === 'normal') {
            setPlayback('muted');
            console.log("muted");
        } else if (playback ==='muted') {
            setPlayback('normal');
            console.log("normal");
        } else if (playback ==='soloed') {
            setPlayback('solo-forced');
            console.log('solo-forced');
        } else if (playback === 'solo-forced') {
            setPlayback('soloed');
            console.log("soloed");
        }
    };

    const handleSoloToggle = () => {
        if (playback === 'normal') {
            setPlayback('soloed');
            console.log("soloed");
        } else if (playback ==='muted') {
            setPlayback('solo-forced');
            console.log("solo-forced");
        } else if (playback ==='soloed') {
            setPlayback('normal');
            console.log("normal");
        } else if (playback ==='solo-forced'){
            setPlayback('muted');
            console.log("muted");
            }
        };  

    return (
            <ButtonGroup>
                <ToggleButton label="M" active={playback === 'muted' || playback=='solo-forced'} color={muteColor} onClick={handleMuteToggle} isDisabled={isDisabled} />
                <ToggleButton label="S" active={playback === 'soloed' || playback==='solo-forced'} color={'green'} onClick={handleSoloToggle} isDisabled={isDisabled} />
            </ButtonGroup>
    );
};

export default ToggleFunction;

    const ButtonGroup = styled.div`
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    `;