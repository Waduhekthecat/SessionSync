import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconButton, Button, ClickAwayListener } from '@mui/material';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const AccountMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const anchorRef = useRef<HTMLButtonElement>(null);
    const toggleMenu = () => {
        setOpen(prev => !prev);
    };

    const handleSignOut = (e: React.MouseEvent) => {
        e.preventDefault();
        signOut();
        navigate('/', { replace: true });
    };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }}>
        <StyledIconButton onClick={toggleMenu} ref={anchorRef}>
          <PersonIcon />
        </StyledIconButton>

        {open && (
          <Dropdown>
            <AccountButton>Account</AccountButton>
            <Divider />
            <SignOutButton variant="text" onClick={handleSignOut}>Sign out</SignOutButton>
          </Dropdown>
        )}

      </div>
    </ClickAwayListener>
  );
};

export default AccountMenu;

const StyledIconButton = styled(IconButton)`
  && {
    background-color: transparent; 
    border: 2px solid transparent;
    border-radius: 50%;
    padding: 5px;
    color:rgb(255, 255, 255); 
    transition: border-color 0.3s, background-color 0.3s;

    &:hover {
        color: rgb(61, 187, 255);
        background-color:rgb(21, 21, 21);
    }
    &:focus {
        color: rgb(61, 187, 255);
        background-color:rgb(21, 21, 21);
    }
  }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 150px;
    background-color:rgb(87, 87, 87);
    border: 1px solid #444;
    border-radius: 5px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    text-transform: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const AccountButton = styled(Button)`
  && {
    color: #fff;
    justify-content: flex-start;
    padding-left: 30px;
    text-transform: none;
    width: 100%;
    font-size: 0.9rem;

    &:hover {
      background-color:rgb(122, 122, 122);
    }

  }
`;

const SignOutButton = styled(Button)`
  && {
    color: #fff;
    justify-content: flex-start;
    padding-left: 30px;
    text-transform: none;
    width: 100%;
    font-size: 0.9rem;

    &:hover {
      background-color:rgb(122, 122, 122);
    }

  }
`;

const Divider = styled.div`
    height: 1px;
    background-color: black;  
    margin: 4px auto;           
    width: 90%;
`;