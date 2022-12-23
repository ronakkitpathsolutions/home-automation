import React from 'react'
import { isTokenActivated } from '../../utils/functions'
import { getDataFromLocalStorage } from '../../utils/localStorage'

const withAuth = (RenderComponent, NavigateComponent) => ({ to, replace, ...props }) => {

    const token = getDataFromLocalStorage('token')
    return !isTokenActivated(token) ? <RenderComponent {...props} /> : <NavigateComponent {...{ to, replace }} />
}

export default withAuth
