import React, { useState } from 'react';

const CreateTodo = () => {
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Submitting taskName ${taskName} and assignee ${assignee}`);
    setTaskName('');
    setAssignee('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name</label>
      <input
        name="taskName"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      ></input>
      <label htmlFor="assignee">Assigned to:</label>
      <input
        name="assignee"
        value={assignee}
        onChange={e => setAssignee(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTodo;
