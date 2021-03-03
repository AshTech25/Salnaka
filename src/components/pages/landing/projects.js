import React, { Component, useState, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import { projects } from './content';

const Project = ({ title, desc, passStates }) => (
    <Card
        onMouseEnter={() => passStates(title, desc)}
        onMouseLeave={() => passStates(projects[0].title, projects[0].desc)}
    >
        <CardActionArea style={{ height: '120px' }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6" align="center">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

const Projects = () => {
    const [title, setTitle] = useState(projects[0].title);
    const [desc, setDesc] = useState(projects[0].desc);
    const setStates = (title, desc) => {
        setTitle(title);
        setDesc(desc);
    };

    return (
        <Grid container spacing={4} justify="center">
            <Hidden smDown>
                <Grid item md={4}>
                    <Card style={{ height: '100%' }}>
                        <CardActionArea style={{ height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h6" align="center">
                                    {title}
                                </Typography>
                                <Typography variant="body2" component="p" align="center">
                                    {desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    {projects.map((project) => (
                        <Grid item xs={6} md={project.cols*3}>
                            <Typography gutterBottom variant="h6" component="h6" align="center">
                                <Project title={project.title} desc={project.desc} passStates={setStates} />
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Projects;
