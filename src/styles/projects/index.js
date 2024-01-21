import { Card, CardMedia } from "@mui/material";
import { Colors } from "../theme";
import styled from "@emotion/styled";


export const ProjectCard = styled(Card)((() => ({
    margin: '1rem',
    backgroundColor: Colors.secondary,
    color: Colors.white,
    border: `.2rem solid ${Colors.purple}`
})))

export const ProjectCardMedia = styled(CardMedia)((() => ({
    component: 'img',
    height: '140px'
})))