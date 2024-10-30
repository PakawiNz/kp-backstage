import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';

export const CardSystemAttributeComponent = ({ prefix = 'kingpower.com' }) => {
  const entity = useEntity();
  console.log(entity);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Grid container spacing={3}>
          {Object.entries(entity.entity.metadata.annotations ?? {})
            .filter(([k]) => k.startsWith(prefix + '/'))
            .map(([key, value]) => {
              return (
                <>
                  <Grid item xs={6}>
                    <b>{key.split('/')[1]}</b>
                  </Grid>
                  <Grid item xs={6}>
                    {value}
                  </Grid>
                </>
              );
            })}
        </Grid>
      </CardContent>
    </Card>
  );
};
