import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectID = 'e7ee90be-5c07-4262-b7fc-81dd20d37775';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
             height ="100vh"
             projectID={projectID}
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
             onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


        />
    );
};

export default App;