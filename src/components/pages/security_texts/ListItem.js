import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Arrow from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';


export default function ListItemComponent(props) {
  return (
      
          <ListItem>
              <ListItemIcon>
                  <Arrow />
              </ListItemIcon>
              <Typography variant="h6" >
                  {props.text}
              </Typography>
          </ListItem>
      
  );
}
