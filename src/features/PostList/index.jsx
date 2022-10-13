import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PropTypes from 'prop-types';
import './style.sass';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
}

function PostList(props) {
    const { posts } = props;
    return (
        <>
            <Container >
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid item key={post.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Link
                                    variant="body2"
                                    href="#"
                                    sx={{
                                        // 16:9
                                        position: 'relative',
                                        pt: '56.25%',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        heigth="150"
                                        image={post.imageUrl}
                                        alt={post.title}
                                        sx={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </Link>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Link href="#" variant="body2" color="primary" sx={{
                                        textDecoration: 'none',
                                    }} >
                                        <Typography gutterBottom variant="h5" component="h2" color="primary" sx={{
                                            fontSize: '19px'
                                        }}>
                                            {post.title}
                                        </Typography>
                                    </Link>
                                    <Typography className="multiLineEllipsis">
                                        {post.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default PostList;