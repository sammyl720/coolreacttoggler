import React, { useEffect, createRef } from "react";

const Story = ({ exit }) => {
  const ref = createRef();
  useEffect(() => {
    const element = ref.current;
    console.log(exit);
    if (exit) {
      element.className = "hide";
      console.log(element);
    }
  }, [exit]);
  return (
    <div className="show" ref={ref}>
      <h3 className="header">A friend in need is a friend indeed</h3>
      <p>
        Once upon a time there lived a lion in a forest. One day after a heavy
        meal. It was sleeping under a tree. After a while, there came a mouse
        and it started to play on the lion. Suddenly the lion got up with anger
        and looked for those who disturbed its nice sleep. Then it saw a small
        mouse standing trembling with fear. The lion jumped on it and started to
        kill it. The mouse requested the lion to forgive it. The lion felt pity
        and left it. The mouse ran away.
      </p>
      <p>
        On another day, the lion was caught in a net by a hunter. The mouse came
        there and cut the net. Thus it escaped. There after, the mouse and the
        lion became friends. They lived happily in the forest afterwards.
      </p>
    </div>
  );
};

export default Story;
