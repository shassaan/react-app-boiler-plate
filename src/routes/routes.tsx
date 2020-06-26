import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home } from '../components/Home/HomeComponent';
import { LoginComponent } from '../components/Login/LoginComponent';
import { MainLayout } from '../components/Layout/MainLayout';
export const Routes: React.StatelessComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginComponent} />
                <MainLayout>
                    <Route exact path="/" component={Home} />
                </MainLayout>

            </Switch>
        </BrowserRouter>
    )
}
