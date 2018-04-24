import React from 'react';
import {Paper, Divider, TextField} from 'material-ui';

const style = {
    marginLeft: 20,
};

const Signup = () =>(
    
    <Paper zDepth={2}>
        <TextField hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Password" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Confirm Password" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Date of Birth" style={style} underlineShow={false} />
        <Divider />
    </Paper>
)

export default Signup;