import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';

import "./InfoBox.css";
export default function InfoBox({Info}){
    let COLD_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let MILD_URL="https://images.unsplash.com/photo-1731737049505-762518bb6e3d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ width: '100%' ,height:'100%'}}>
            <CardMedia
                sx={{ height: 240 }}
                image={Info.humidity > 75
                    ? RAIN_URL
                    : Info.temp < 15
                        ? COLD_URL
                        : Info.temp < 30
                            ? MILD_URL
                            : HOT_URL
                }
                title="weather"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {Info.city}{ Info.humidity > 75
                    ? <ThunderstormIcon/>
                    : Info.temp < 15
                        ? <AcUnitIcon/>
                        : Info.temp < 30
                            ? <ThermostatIcon/>
                            : <SunnyIcon/>
                 }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Temperature: {Info.temp}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Feels Like: {Info.feelsLike}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Min Temperature: {Info.tempMin}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Max Temperature: {Info.tempMax}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Humidity: {Info.humidity}%
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Weather: {Info.weather}
                </Typography>
            </CardContent>
            </Card>
            </div>

        </div>
    )
}