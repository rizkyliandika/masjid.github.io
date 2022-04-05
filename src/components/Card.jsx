import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { maxWidth } from '@mui/system';

export default function MediaCard(props) {

    React.useEffect(() => {

    }, [])

    return (
        <Card sx={{ maxWidth: 345, mt: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={props?.image}
                alt={props?.image}
            />
            <CardContent sx={{ minHeight: '134px', minWidth: '279px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props?.title?.split('-')[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props?.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={props?.url} variant='h6' flex={1} sx={{ textDecoration: 'none', ":hover": { color: '#FFE956' } }}>Detail</Link>
            </CardActions>
        </Card>
    );
}
