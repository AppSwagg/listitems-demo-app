import React from 'react'
import { 
    Box, 
    List, 
    ListItem,
    ListItemButton, 
    Divider, 
    ListItemIcon, 
    IconButton,
    Switch,
    ListItemAvatar,
    Avatar,
    Checkbox,
    Typography
} from '@mui/material'
import { ListItemTextExtended, ListItemSecondaryActionExtended } from 'mui-listitem-extended'
import { 
    ChevronRight, 
    Folder, 
    Language, 
    Map, 
    PlayCircle, 
    FontDownloadOutlined, 
    VolumeUpOutlined, 
    VolumeUp, 
    Payment, 
    RoomOutlined, 
    LockOutlined, 
    AddShoppingCart, 
    BrightnessMediumOutlined, 
    CakeOutlined, 
    Phone, 
    ChatBubble } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import pixel5a from '../../assets/pixel5a.jpg'
import marcel from '../../assets/marcel.jpg'
import jessica from '../../assets/jessica.jpg'
import chernobyl from '../../assets/chernobyl.jpg'


const ListItemsScreen = () => {
    const theme = useTheme()
    return (
        <Box>
            <List>
                {/* Volume list item */}
                <ListItem>
                    <ListItemIcon>
                        <VolumeUpOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended
                        primary="Sound"/>
                    <ListItemSecondaryActionExtended>
                        <Switch/>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar> 
                        <Avatar variant="rounded" alt="Pixel 5a" src={pixel5a} />
                    </ListItemAvatar>
                    <ListItemTextExtended primary="Pixel 5a with 5G" secondary="Sage Green"/>
                    <ListItemSecondaryActionExtended>
                        <Typography>$449.00</Typography>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <Folder color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended overlineTypographyProps={{color: `${theme.palette.primary.main}`}} overline="Folder" primary="Yosemite" />
                    <ListItemSecondaryActionExtended>
                        <Checkbox />
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <Language color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended overlineTypographyProps={{color: `${theme.palette.primary.main}`}} overline="language" primary="English"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <ChevronRight/>
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar> 
                        <Avatar variant="rounded" alt="Marcel" src={marcel} />
                    </ListItemAvatar>
                    <ListItemTextExtended primary="Marcel" secondary="Her's"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <PlayCircle color="primary"/>
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Jessica Okoye" src={jessica}/>
                    </ListItemAvatar>
                    <ListItemTextExtended primary="Jessica Okoye" secondary="j.okoye@microck.com" />
                </ListItemButton>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <FontDownloadOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended primary="material" secondary="/məˈtɪriəl/"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <VolumeUp color="primary" />
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <Payment color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended 
                        overline="payment" 
                        overlineTypographyProps={{color: `${theme.palette.primary.main}`}} 
                        primary="•••• •••• •••• 5304" secondary="July 2025"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Franklin" src={jessica}/>
                    </ListItemAvatar>
                    <ListItemTextExtended 
                        overline="manager" 
                        overlineTypographyProps={{color: `${theme.palette.primary.main}`}} 
                        primary="Franklin Martinez" 
                        secondary="(555) 521-5554" />
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <Phone color="primary"/>
                        </IconButton>
                        <IconButton>
                            <ChatBubble color="primary"/>
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <RoomOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemTextExtended 
                        overline="address" 
                        overlineTypographyProps={{color: `${theme.palette.primary.main}`}} 
                        primary="478 Main St" 
                        secondary="Apartnemt 24"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <Map color="primary"/>
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemTextExtended primary="IP Address" />
                    <ListItemSecondaryActionExtended>
                        <Typography color="textSecondary">192.168.1.1</Typography>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <LockOutlined color="primary"/>
                    </ListItemIcon>
                    <ListItemTextExtended primary="Privacy"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded" alt="Movie" src={chernobyl}/>
                    </ListItemAvatar>
                    <ListItemTextExtended primary="Chernobyl" secondary="$24.99" />
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <AddShoppingCart color="primary" />
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <BrightnessMediumOutlined color="primary"/>
                    </ListItemIcon>
                    <ListItemTextExtended primary="Display" secondary="Styles, Wallpapers, Fonts"/>
                    <ListItemSecondaryActionExtended>
                        <IconButton>
                            <ChevronRight/>
                        </IconButton>
                    </ListItemSecondaryActionExtended>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <CakeOutlined color="primary"/>
                    </ListItemIcon>
                    <ListItemTextExtended overline="birthday" overlineTypographyProps={{color: `${theme.palette.primary.main}`}} primary="June 30, 1997"/>
                </ListItem>

            </List>
        </Box>
    )
}

export default ListItemsScreen
