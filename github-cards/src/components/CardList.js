import React from 'react';
import Card from './Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const CardList = props => {
  console.log(props.users)
  if (props.users.length === 0) {
    return <p>Loading</p>
  }

  return (
    <div>
      <GridList cellHeight={160} cols={3}>
        {props.users.map(el => (
          <GridListTile cols={1}>
            <Card key={el.created_at} user={el}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default CardList;