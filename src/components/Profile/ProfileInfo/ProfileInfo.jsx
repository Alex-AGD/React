import React from "react";
import { Button, Card, CardBody, CardImg, CardText } from "reactstrap";
import Preloader from "../../common/Preloader/Preloader";
import CardLink from "reactstrap/es/CardLink";

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const ProfileInfo = (props) => {
    if ( !props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <Card>
                <CardImg src={ props.profile.photos.large }/>
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
                    <CardLink className=""> github { props.profile.github }</CardLink>
                    <CardLink className=""> lookingForAJob { props.profile.lookingForAJob }</CardLink>
                    <CardText className="text-secondary mb-4" style={ { fontSize: '0.75rem' } }>Full-stack web developer
                        learning new hacks one day at a time. Web technology enthusiast.</CardText>
                    <Button color="success" className="font-weight-bold">View Profile</Button>

                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileInfo;