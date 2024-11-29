import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material';

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | []>([]);
  const handleFormatChange = (
    e: React.MouseEvent,
    updatedFormats: string[]
  ) => {
    console.log(updatedFormats);
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={4}>
        <Button variant='contained'>contained</Button>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>outlined</Button>
        <Button href='/' endIcon={<SendIcon />}>
          Go to Home
        </Button>
      </Stack>
      <Stack direction='row' spacing={3}>
        <Button color='primary' variant='contained'>
          Primary
        </Button>
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
        <Button color='error' variant='contained'>
          error
        </Button>
        <Button color='success' variant='contained'>
          success
        </Button>
      </Stack>
      <Stack display='block' direction='row' spacing={3}>
        <Button size='large' variant='contained'>
          large
        </Button>
        <Button size='medium' variant='contained'>
          medium
        </Button>
        <Button size='small' variant='contained'>
          small
        </Button>
        <IconButton>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row' spacing={3}>
        <Button color='primary' variant='contained' disableElevation>
          Shadow disabled
        </Button>
        <Button color='primary' variant='contained' disableRipple>
          ripple disabled
        </Button>
      </Stack>
      <Stack spacing={3}>
        <Stack direction='row' spacing={3}>
          <ButtonGroup size='medium' variant='contained'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction='row' spacing={3}>
          <ButtonGroup size='small' variant='contained' orientation='vertical'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack direction='row' spacing={3}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value='bold'>
            <FormatBold />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
