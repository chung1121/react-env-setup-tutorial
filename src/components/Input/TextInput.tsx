import React, { useState, type ChangeEvent } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const TextInput = () => {
  const [text, setText] = useState<string>('');
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        value={text}
        placeholder="Enter some text"
        className="border shadow-lg bg-blue-300 py-3 px-2"
      />
      <Input />
      <p>{text}</p>
      <Button className="mt-10">Submit</Button>
    </div>
  );
};

export default TextInput;
