import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Spinner, InputGroup } from "react-bootstrap";
import { racesActions } from '../redux/actions/races.actions';


function RaceList() {

    const ras = useSelector(state => state.races);
    const dispatch = useDispatch();

    const [sortType, setSortType] = useState("ASC");

    useEffect(() => {
        dispatch(racesActions.getRacesByYearAndRound("2021", "1"));
    }, []);

    const handleSort = (e) => {
        (sortType == "ASC") ? setSortType("DES") : setSortType("ASC")
        dispatch(racesActions.sortByPosition(sortType));
    }

    return (
        <div>
            <div class="row">
                <div class="col-10"> Back </div>
                <InputGroup className="col-2">
                    <Button class="btn btn-info" id="button-addon2" onClick={handleSort}>
                        Sort
                    </Button>
                </InputGroup>
            </div>

            {ras.loading && <Spinner animation="border" variant="primary" />}
            {ras.loadingError && <span className="text-danger">ERROR: {ras.error}</span>}

            {ras.items &&
                <div className="grid">
                    {ras.items.map((em, index) => {
                        return (
                            <Card className="d" style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Title>{em.position}</Card.Title>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{em.Driver.givenName + " " + em.Driver.familyName}</li>
                                        <li class="list-group-item">points: {em.points}</li>
                                        <li class="list-group-item">  {em.Driver.nationality}</li>
                                        <li class="list-group-item"> car: {em.Constructor.constructorId}</li>
                                    </ul>
                                    <Card.Link href={em.Driver.url}>about...</Card.Link>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default RaceList;