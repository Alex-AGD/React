import React from "react";
import { Button, Card, CardBody, CardImg, CardText } from "reactstrap";
import CardLink from "reactstrap/es/CardLink";
import Checkbox from "@material-ui/core/Checkbox";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const ProfileInfo = (props) => {
    if ( !props.profile) {
        return <Avatar src={BANNER}>
        </Avatar>
    }

    return (
        <div>
            <Card>
                <CardImg src={ props.profile.photos.large }/>
                <ProfileStatus status={"Test"}/>
                <CardBody>
                    <CardText className=""> Name: { props.profile.fullName } </CardText>
                    <CardText className=""> В поиске работы: { props.profile.lookingForAJobDescription }</CardText>
                    <CardText className=""> Обо мне: { props.profile.aboutMe }</CardText>
                    <CardLink className=""> Facebook { props.profile.facebook }</CardLink>
                    <CardLink className=""> website { props.profile.website }</CardLink>
                    <CardLink className=""> vk { props.profile.vk }</CardLink>
                    <CardLink className=""> twitter { props.profile.twitter }</CardLink>
                    <CardLink className=""> instagram { props.profile.instagram }</CardLink>
                    <CardLink className=""> youtube { props.profile.youtube }</CardLink>

                    <div> В поиске работы:
                        <Checkbox
                            defaultChecked={props.profile.lookingForAJob}
                            color="primary"
                            onChange={ () =>  props.profile.lookingForAJob}
                            inputProps={ { 'aria-label': 'secondary checkbox' } }
                        />
                    </div>
                    <CardText className="text-secondary mb-4" style={ { fontSize: '0.75rem' } }>Full-stack web developer
                        learning new hacks one day at a time. Web technology enthusiast.</CardText>
                    <Button color="success" className="font-weight-bold">View Profile</Button>

                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileInfo;