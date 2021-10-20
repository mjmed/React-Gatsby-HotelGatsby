import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import styled from '@emotion/styled';
import { css } from '@emotion/react';


const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
`;

const HabitacionPreview = ({ habitacion }) => {
    
    const { contenido, imagen, titulo, slug } = habitacion;

    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <GatsbyImage
                image={ imagen.gatsbyImageData }
                alt="habitacion"
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >
                    { titulo }
                </h3>
                <p>{ contenido }</p>

                <Boton to={slug}>Ver habitación</Boton>
            </div>
        </div>
    )
}

export default HabitacionPreview;
