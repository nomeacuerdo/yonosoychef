import * as React from 'react';
import { Link } from '@mui/material';
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
    </Link>
  );
};

export default IconLink;
