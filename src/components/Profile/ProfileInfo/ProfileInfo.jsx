import React from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import s from "./ProfileInfo.module.css"

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const ProfileInfo = (props) => {
    return (
        <div className={s.CardD}>
            <Card>
                <CardImg src={BANNER}/>
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Alex Coder</CardTitle>
                    <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase"
                                  style={{fontSize: '0.8rem'}}>Web Developer, Lagos</CardSubtitle>
                    <CardText className="text-secondary mb-4" style={{fontSize: '0.75rem'}}>Full-stack web developer
                        learning new hacks one day at a time. Web technology enthusiast.</CardText>
                    <Button color="success" className="font-weight-bold">View Profile</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileInfo;