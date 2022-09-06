import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { __deleteTodoThunk } from '../redux/modules/todosSlice';
import Button from '../elem/Button';
import Stack from '../elem/Stack';
import Text from '../elem/Text';
import Wrapper from '../elem/Wrapper';

const Card = ({ todo }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        dispatch(__deleteTodoThunk(todo.id));
    };

    return (
        <StCard
            onClick={() => {
                navigate(`/works/${todo.id}`);
            }}
        >
            <Stack justify="space-between">
                <Text size="20">{todo.title}</Text>
                <Button
                    size="small"
                    onClick={(event) => {
                        event.stopPropagation();
                        const result = window.confirm("이 할 일을 지울까요?");
                        if (result) {
                            return onDeleteHandler();
                        } else {
                            return;
                        }
                    }}
                    >
                        <FaTrashAlt color="FE531F" />
                    </Button>
            </Stack>
            <Wrapper mg="10px 0">
                <Stack justify="space-between">작성자: {todo.username}</Stack>
            </Wrapper>
        </StCard>
    );
}

export default Card;

const StCard = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;