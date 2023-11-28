// import { useEffect } from 'react';
import { Grid, Avatar, Typography, Fade, Slide, Tooltip } from '@mui/material';
import IconLink from '../mui/IconLink';
// TODO: Add Helmet
// export const meta: MetaFunction = () => {
//   return [
//     { title: 'Yo no soy chef.' },
//     { name: 'description', content: 'Bienvenidos a yo no soy chef' },
//   ];
// };

const Index = () => {
  // useEffect(() => {
  // }, []);

  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Slide
        in
        direction="down"
        timeout={{ appear: 500, enter: 300 }}
      >
        <Avatar
          alt="Yo no soy Chef."
          src="/logo.png"
          variant="square"
          sx={{
            width: '100%',
            height: 128,
            justifySelf: 'center',
            margin: 'auto',
            marginBottom: 8,

            img: {
              objectFit: 'contain',
            },
          }}
        />
      </Slide>
      <Fade
        in
        timeout={{ appear: 1500, enter: 1300 }}
      >
        <Typography
          variant="h1"
          gutterBottom
        >
          Todos los días serán viernes...
        </Typography>
      </Fade>
      <Fade
        in
        timeout={{ appear: 2500, enter: 2300 }}
      >
        <Typography
          variant="h3"
          gutterBottom
        >
          ...pronto
        </Typography>
      </Fade>
      <Grid
        item
        xs={12}
      >
        <Fade
          in
          timeout={{ appear: 3500, enter: 3300 }}
        >
          <div>
            <Tooltip title="Instagram">
              <IconLink
                name="instagram"
                url="https://instagram.com/yonosoychef"
              />
            </Tooltip>
            <Tooltip title="Facebook">
              <IconLink
                name="facebook"
                url="https://www.facebook.com/yonosoychef"
              />
            </Tooltip>
            <Tooltip title="Whatsapp">
              <IconLink
                name="whatsapp"
                url="https://wa.link/d76aiy"
              />
            </Tooltip>
            <Tooltip title="Menu">
              <IconLink
                name="menu"
                url="/menu.pdf"
              />
            </Tooltip>
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default Index;
