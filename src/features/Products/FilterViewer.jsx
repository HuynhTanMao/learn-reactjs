import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Chip } from '@mui/material';
import { useMemo } from 'react';

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const FILTER_LIST = [
    {
        id: 1,
        getLabel: (filters) => 'Miễn phí ship',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: null,
        onToggle: (filters) => {
            const newFilter = { ...filters };
            if (newFilter.isFreeShip) {
                newFilter.isFreeShip = false;
            } else {
                newFilter.isFreeShip = true;
            }
            return newFilter;
        }
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => { return filters.isPromotion ? true : false },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilter = {
                ...filters,
                isPromotion: false
            }
            return newFilter;
        },
        onToggle: null
    },
    {
        id: 3,
        getLabel: (filters) => {
            const priceGte = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(filters.salePrice_gte);
            const priceLte = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(filters.salePrice_lte);
            return `${priceGte} đến ${priceLte}`;
        },
        isActive: (filters) => { return (filters.salePrice_gte || filters.salePrice_lte) ? true : false },
        isVisible: (filters) => { return (filters.salePrice_gte || filters.salePrice_lte) ? true : false },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilter = {
                ...filters
            }
            delete newFilter.salePrice_gte;
            delete newFilter.salePrice_lte;
            return newFilter;
        },
        onToggle: null
    },
    {
        id: 4,
        getLabel: (filters) => filters.categoryName,
        isActive: (filters) => { return (filters.category) ? true : false },
        isVisible: (filters) => { return (filters.category) ? true : false },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilter = {
                ...filters
            }
            delete newFilter.category;
            return newFilter;
        },
        onToggle: null
    }
]

function FilterViewer({ filters = {}, onChange = null }) {
    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters));
    }, [filters])

    return (
        <Box component="ul" sx={{
            display: 'flex',
            alignItems: 'center',
            listStyleType: 'none',
            paddingLeft: 0,
            '>li': {
                marginRight: 1
            }
        }}>
            {visibleFilters.map(item => (
                <li key={item.id}>
                    <Chip
                        label={item.getLabel(filters)}
                        color={item.isActive(filters) ? 'primary' : 'default'}
                        onClick={(!item.isRemovable) ? () => {
                            if (!onChange) return;

                            const newFilter = item.onToggle(filters);
                            onChange(newFilter);

                        } : null}
                        onDelete={(item.isRemovable) ? () => {
                            if (!onChange) return;

                            const newFilter = item.onRemove(filters);
                            onChange(newFilter);

                        } : null}
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;