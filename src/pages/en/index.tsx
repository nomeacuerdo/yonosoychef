import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Avatar, Typography, Fade, Slide, Tooltip } from '@mui/material';
import IconLink from '../../mui/IconLink';

// TODO: Add Helmet
// export const meta: MetaFunction = () => {
//   return [
//     { title: 'Yo no soy chef.' },
//     { name: 'description', content: 'Bienvenidos a yo no soy chef' },
//   ];
// };
interface LinkIconProps {
  name: string;
  url: string;
}
// eslint-disable-next-line react/display-name
const LinkIcon = forwardRef<HTMLElement, LinkIconProps>(({ name, url }) => (
  <IconLink
    name={name}
    url={url}
  />
));

const IndexEN = () => {
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid
        item
        xs={12}
      >
        <Slide
          in
          direction="down"
          timeout={{ appear: 500, enter: 300 }}
        >
          <Avatar
            alt="Yo no soy Chef."
            src="/logo.svg"
            variant="square"
            sx={{
              width: 192,
              height: 192,
              justifySelf: 'center',
              margin: 'auto',

              img: {
                objectFit: 'contain',
              },
            }}
          />
        </Slide>
      </Grid>
      <Grid item>
        <Fade
          in
          timeout={{ appear: 1500, enter: 1300 }}
        >
          <Typography
            variant="h1"
            gutterBottom
          >
            Every day will be Friday...
          </Typography>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Fade
          in
          timeout={{ appear: 2500, enter: 2300 }}
        >
          <Typography
            variant="h3"
            gutterBottom
          >
            Soon.
          </Typography>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: 3,
        }}
      >
        <Fade
          in
          timeout={{ appear: 3500, enter: 3300 }}
        >
          <div>
            <Tooltip title="Instagram">
              <LinkIcon
                name="instagram"
                url="https://instagram.com/yonosoychef"
              />
            </Tooltip>
            <Tooltip title="Whatsapp">
              <LinkIcon
                name="whatsapp"
                url="https://wa.link/d76aiy"
              />
            </Tooltip>
            <Tooltip title="Menu">
              <LinkIcon
                name="menu"
                url="/menu-en.pdf"
              />
            </Tooltip>
            <Tooltip title="Español">
              <Link to="/">
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
              </Link>
            </Tooltip>
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default IndexEN;
