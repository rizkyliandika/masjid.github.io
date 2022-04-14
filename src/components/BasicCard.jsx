import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    return (
        <Card sx={{ minWidth: 150, height: 160, width: 225 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    Upcoming Prayer Fajr
                </Typography>
                <Typography variant="h3" color="text.secondary">
                    {/* {props?.timer} */}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}
