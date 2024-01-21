import { Box, Card, CardMedia } from "@mui/material";
import { Colors } from "../theme";
import styled from "@emotion/styled";

export const ProjectsContainer = styled(Box)((() => ({
    paddingTop: '5rem',
    margin: '1rem'
})))

export const ProjectsHeaderContainer = styled(Box)((() => ({
    margin: '0 2rem',
    color: Colors.white
})))

export const ProjectCard = styled(Card)((() => ({
    margin: '1rem',
    backgroundColor: Colors.secondary,
    color: Colors.white,
    border: `.2rem solid ${Colors.purple}`
})))

export const ProjectCardMedia = styled(CardMedia)((() => ({
    component: 'img',
    height: '10rem'
})))