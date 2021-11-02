import react from 'react';
import reactDom from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/r1.jpeg';
import profile2 from './image/r.jpeg';
import profile4 from './image/photo.jpg';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hi my name is Omiete, I live in Instabul!
                </div>
            </UserCard>
            <UserCard>
                <SingleComment name='Alex' date='Today at 5:00 P.M.' text='Its amazing' picture={profile1} />
            </UserCard>
            <UserCard>
                <SingleComment name='Jack' date='Today at 6:40 P.M.' text='Great job' picture={profile2} />
            </UserCard>
            <UserCard>
                <SingleComment name='Sarah' date='Today at 1:00 A.M.' text='Thank you' picture={profile4} />
            </UserCard>
        </div>
    )
}

reactDom.render(
    <App />,
    document.querySelector('#root')
)