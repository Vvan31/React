import React from 'react'
import CreatePost from '@/components/CreatePost'
import Header from '@/components/Header'
import PostList from '@/components/PostList'


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Main = ({ user, setUser, handleAddPost, posts}) => {
  return (
    <>
      <Container>
        <Box sx={{height: '90%', width: '95vw', overflow:'hidden' }}>
          <Header user={user} setUser={setUser} />
          <CreatePost user={user} handleAddPost={handleAddPost} />
          <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
            <PostList posts={posts} />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Main