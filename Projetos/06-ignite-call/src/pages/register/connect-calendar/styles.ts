import { Box, styled, Text } from '@ignite-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})
export const DesconnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: '0.09px solid transparent',
  padding: 'center',
  borderRadius: '$md',

  marginBottom: '$4',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray600',
  padding: '$4 $6',
  borderRadius: '$md',

  marginBottom: '$4',
})

export const AuthError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})

export const AuthLogout = styled(Text, {
  color: '#f75a68',

  '&:hover': {
    color: 'lightgray',
  },
})
