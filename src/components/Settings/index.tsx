import React, { useContext, Fragment, useState } from "react";
import { MessagesContext } from "../../store/Messages/index";
export default () => {
  const state: any = useContext(MessagesContext);

  return (
    <Fragment>
      <input
        type="text"
        placeholder="type your username"
        value={state.username}
        onChange={e => state.setUsername(e.target.value)}
      />
    </Fragment>
  );
};
