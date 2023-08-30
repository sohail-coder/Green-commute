import React, { useRef } from 'react';
import { Box, IconButton, Modal, styled, Typography } from '@mui/material';
import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import theme from 'theme/index';
import successLogo from 'assets/icons/success.png';
import closeIcon from 'assets/icons/close.png';
import {
  CLICK_HERE,
  FILE_UPLOAD,
  OKAY,
  UPLOAD_SUCCESS,
} from '../../../constants/constants';

interface FileUploadProps {
  open: boolean;
  success: boolean;
  handleChange: (e: any) => void;
  display: boolean;
  handleClick: () => void;
}

const StyledModal = styled(Modal)({
  '& .box': {
    boxSizing: 'border-box',
    background: theme.palette.accent?.contrastText,
    height: '400px',
    width: '51.245vw',
    borderRadius: '12px',
    border: 'none',
    margin: '10% auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  '& .inputBox': {
    border: '2px dashed #30A193',
    borderRadius: '12px',
    background: theme.palette.gradient?.light,
    width: '43.338vw',
    height: '268px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .close': {
    marginLeft: '48.609vw',
    marginTop: '0px',
    margingRigt: '28px',
  },
});

const TypographyStyled = styled(Typography)({
  width: '70.85vw',
  marginInlineStart: 'auto',
});

const Box1 = styled(Box)({
  marginLeft: '22.572vw',
});

const Box2 = styled(Box)({
  marginTop: '2.9vw',
  marginLeft: '12vw',
  width: '36.310vw',
});
const Box3 = styled(Box)({
  marginTop: '2.343vw',
  marginLeft: '19.9vw',
});
const SubBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});
const MainBox = styled(Box)({
  boxSizing: 'border-box',
  background: theme.palette.accent?.contrastText,
  height: '400px',
  width: '51.245vw',
  borderRadius: '12px',
  border: 'none',
  margin: '10% auto',
});

const FileUploadContainer = styled(Box)({
  paddingLeft: '53px',
  marginTop: '16px',
  paddingBottom: '51px',
  boxSizing: 'border-box',
  background: theme.palette.accent?.contrastText,
  height: '314px',
  width: '51.245vw',
  borderRadius: '12px',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});
const FileUploadTextContainer = styled(Box)({
  marginLeft: '55px',
});
const FileUpload = (props: FileUploadProps) => {
  const { handleChange, success, display, handleClick } = props;
  const uploadRef = useRef<HTMLInputElement>(null);

  return (
    <div data-testid="modal-component">
      {display ? (
        <StyledModal open={display} data-testid="success">
          {!success ? (
            <Box className="box box1">
              <IconButton
                onClick={handleClick}
                data-testid="close-button"
                className="close"
              >
                <Image imageSource={closeIcon} imageWidth="30px" />
              </IconButton>
              <FileUploadTextContainer>
                <Typography variant="h2">{FILE_UPLOAD}</Typography>
              </FileUploadTextContainer>
              <FileUploadContainer>
                <Box className="inputBox">
                  <input
                    ref={uploadRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    id="file-button"
                    onChange={handleChange}
                    hidden
                    data-testid="file-input"
                  />
                  <div data-testid = "fileUploadButton">
                  <Button
                    variant="contained"
                    label={CLICK_HERE}
                    labelColor={`${theme.palette.accent?.contrastText}`}
                    onClick={() =>
                      uploadRef.current && uploadRef.current.click()
                    }
                    typographyVariant={'caption'}
                  />
                  </div>
                </Box>
              </FileUploadContainer>
            </Box>
          ) : (
            <MainBox>
              <IconButton onClick={handleClick} className="close">
                <Image imageSource={closeIcon} imageWidth="30px" />
              </IconButton>
              <SubBox>
                <Box1>
                  <Image imageSource={successLogo} />
                </Box1>
                <Box2>
                  <TypographyStyled variant="h2">
                    {UPLOAD_SUCCESS}
                  </TypographyStyled>
                </Box2>
                <Box3>
                  <Button
                    variant="contained"
                    label={OKAY}
                    labelColor={`${theme.palette.accent?.contrastText}`}
                    onClick={handleClick}
                    typographyVariant={'caption'}
                    width="11.420vw"
                    height="40px"
                  />
                </Box3>
              </SubBox>
            </MainBox>
          )}
        </StyledModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUpload;
