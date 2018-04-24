import React, {Component} from 'react';
import {FlatButton, IconMenu, IconButton, MenuItem,} from 'material-ui';
import  MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component{
    static muiName = "FlatButton";
  
    render(){
      return (
        <FlatButton {...this.props} label="Login"/>
      );
    }
}

const Logged = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal:'right', vertical:'top'}}
      anchorOrigin={{horizontal:'right', vertical:'top'}}
      >
    <MenuItem primaryText="Refresh"/>
    <MenuItem primaryText="Help"/>
    <MenuItem primaryText="Sign out" />
    </IconMenu>
  );

export { Logged, Login};