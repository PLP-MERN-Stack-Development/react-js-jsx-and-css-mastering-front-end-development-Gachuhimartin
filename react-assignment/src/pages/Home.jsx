import React from 'react';
import Card from '../components/Card';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My React App</h1>
            <p className="text-lg mb-8">This is the landing page of the application.</p>
            <Card title="Get Started" content="Explore the features of this application and manage your tasks efficiently." />
        </div>
    );
};

export default Home;