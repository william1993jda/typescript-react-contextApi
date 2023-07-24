import React, { useState, useCallback, useEffect } from 'react'
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/tarefasService';
import { ApiException } from '../../shared/services/api/ApiException';

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message)
                } else {
                    setLista(result)
                }
            })
    }, [])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value

            e.currentTarget.value = ''

            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message)
                    } else {
                        setLista((oldLista) => [...oldLista, result])
                    }
                })
        }
    }, [lista])

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;

        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted,
        })
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.map(oldListItem => {
                            if (oldListItem.id === id) return result;
                            return oldListItem;
                        });
                    });
                }
            });
    }, [lista]);

    const handleDelete = useCallback((id: number) => {
        TarefasService.deleteById(id)
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.filter(oldListItem => oldListItem.id !== id);
                    });
                }
            });
    }, []);

    return (
        <div className='d-flex justify-content-center w-100 align-items-center' style={{ height: '50vh' }}>
            <div style={{ maxWidth: '80%', width: '40%' }}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        onKeyDown={handleInputKeyDown}
                    />
                    <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
                </div>
                <p>Lista</p>
                <ul className="list-group">
                    {lista.map((listItem) => {
                        return (
                            <li key={listItem.id} className="list-group-item">
                                <input
                                    type="checkbox"
                                    checked={listItem.isCompleted}
                                    onChange={() => handleToggleComplete(listItem.id)}
                                />{' '}
                                {listItem.title}
                                {' '}
                                <button
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={() => handleDelete(listItem.id)}
                                >
                                    Apagar
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}