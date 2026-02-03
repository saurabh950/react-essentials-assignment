import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    max-width:400px;
    margin:50px auto;
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.lg};
    box-shadow: 0 20px 40px ${props => props.theme.colors.  shadow};
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 30px 60px rgba(0,0,0,0.15);
    }
`;

const CardHeader = styled.div`
    height: 120px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: white;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

const CardBody = styled.div`
    padding: 30px 25px 25px;
    text-align: center;
`;

const Name = styled.h2`
    margin: 0 0 5px 0;
    font-size: 24px;
    font-weight: 700;
    color: #2d3748;
    letter-spacing: -0.5px;
`;

const Title = styled.p`
    margin: 0 0 25px 0;
    font-size: 16px;
    color: #718096;
    font-weight: 500;
`;

const StatContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 25px 0;
    padding: 20px 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
`;

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const StatNumber = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    line-height: 1;
`;

const StatLabel = styled.span`
    font-size: 12px;
    color: #a0aec0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
`;

const Bio = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #4a5568;
    margin: 0 0 25px 0;
    text-align: center;
`;

const ActionsContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
`;


const Button = styled.button`
    flex: 1;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid #667eea;

    ${props => props.primary ? `
        background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
    
        &:hover{
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
    ` : `
        background: transparent;
        color: #667eea;

        &:hover{
            background: #667eea;
            color: white;
            transform: translateY(-2px);
        }
    `}
`;

const ProfileCardStyled = () => {
    return(
        <CardContainer>
            <CardHeader>
                <ProfileImageContainer>
                    <img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=" alt="Profile"/>
                </ProfileImageContainer>
            </CardHeader>
            <CardBody>
                <Name>Alex Jhonson</Name>
                <Title>Frontend Developer</Title>

                <StatContainer>
                    <Stat>
                        <StatNumber>1.2k</StatNumber>
                        <StatLabel>Followers</StatLabel>
                    </Stat>
                    <Stat>
                        <StatNumber>892</StatNumber>
                        <StatLabel>Following</StatLabel>
                    </Stat>
                    <Stat>
                        <StatNumber>147</StatNumber>
                        <StatLabel>Projects</StatLabel>
                    </Stat>
                </StatContainer>

                <Bio>Passionate about creating beautiful, user-friendly web experiences. Love working with React, Typescript and mordern web Technologies.</Bio>

                <ActionsContainer>
                    <Button primary>Follow</Button>
                    <Button>Message</Button>
                </ActionsContainer>
            </CardBody>
        </CardContainer>
    )
}

export default ProfileCardStyled;