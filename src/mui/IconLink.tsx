import { Link, Avatar } from '@mui/material';
import {
  Instagram,
  WhatsApp,
  Facebook,
  InsertDriveFile,
} from '@mui/icons-material';

const IconLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={url}
      underline="none"
    >
      {name === 'instagram' && (
        <Instagram
          sx={{
            width: 48,
            height: 48,
            marginRight: 4,
          }}
        />
      )}
      {name === 'whatsapp' && (
        <WhatsApp
          sx={{
            width: 48,
            height: 48,
            marginRight: 4,
          }}
        />
      )}
      {name === 'facebook' && (
        <Facebook
          sx={{
            width: 48,
            height: 48,
            marginRight: 4,
          }}
        />
      )}
      {name === 'menu' && (
        <InsertDriveFile
          sx={{
            width: 48,
            height: 48,
            marginRight: 4,
          }}
        />
      )}
      {name === 'english' && (
        <Avatar
          alt="English"
          src="/english.svg"
          variant="square"
          sx={{
            width: 48,
            height: 48,
            justifySelf: 'center',
            display: 'inline-block',
            marginRight: 4,
            img: {
              objectFit: 'contain',
            },
          }}
        />
      )}
      {name === 'espanol' && (
        <Avatar
          alt="Español"
          src="/spanish.svg"
          variant="square"
          sx={{
            width: 48,
            height: 48,
            justifySelf: 'center',
            display: 'inline-block',
            marginRight: 4,
            img: {
              objectFit: 'contain',
            },
          }}
        />
      )}
    </Link>
  );
};

export default IconLink;
