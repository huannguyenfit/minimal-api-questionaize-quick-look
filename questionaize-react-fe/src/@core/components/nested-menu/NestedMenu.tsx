import { Button, Divider, Menu, MenuItem, PopoverOrigin } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
import classNames from "classnames"
// import NestedMenuItem from "material-ui-nested-menu-item"
import React, { useState } from "react"
import "./NestedMenu.scss"

export interface NestedMenuItem {
	title?: React.ReactNode
	handleClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
	className?: string
	icon?: React.ReactNode
	addDivider?: boolean
	nestedMenu?: NestedMenuItem[]
	custom?: React.ReactNode
	disabled?: boolean
}

interface Props {
	items: NestedMenuItem[]
	className?: string
	popoverClassName?: string
	icon?: React.ReactNode
	anchorOrigin?: PopoverOrigin
	transformOrigin?: PopoverOrigin
	isAddButton?: boolean
	title?: string
}

export const NestedMenu: React.FC<Props> = ({
	items,
	icon,
	className,
	anchorOrigin,
	transformOrigin,
	isAddButton,
	title,
}) => {
	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

	const handleOpen = (e: any) => {
		e.stopPropagation()
		setAnchorEl(e.currentTarget)
		setOpen(true)
	}

	const handleClose = (e: any) => {
		e.stopPropagation()
		setOpen(false)
	}

	const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: NestedMenuItem) => {
		if (item.handleClick) {
			setOpen(false)
			item.handleClick(e)
		}
	}

	const renderItem = (item: NestedMenuItem, key: number) =>
		// item.nestedMenu && item.nestedMenu.length > 0 ? (
		// 	<NestedMenuItem
		// 		id='nested-menu-item'
		// 		disabled={item.disabled}
		// 		label={
		// 			item.icon ? (
		// 				<>
		// 					<span className='mr-2 icon'>{item.icon}</span>
		// 					<span className={classNames("text", item.className)}>{item.title}</span>
		// 				</>
		// 			) : (
		// 				<span className={classNames("text", item.className)}>{item.title}</span>
		// 			)
		// 		}
		// 		parentMenuOpen={open}
		// 		onClick={(e) => {
		// 			handleClick(e, item)
		// 		}}
		// 		key={key}
		// 	>
		// 		{item.nestedMenu.map((nestedItem, index) => renderItem(nestedItem, index))}
		// 	</NestedMenuItem>
		// ) :
			(<div key={key} className={item.className}>
				{item.addDivider && <Divider className='divider' />}
				<MenuItem
					disabled={item.disabled}
					onClick={(e) => {
						handleClick(e, item)
					}}
				>
					{item.custom ? (
						item.custom
					) : (
						<>
							{item.icon && <span className='icon'>{item.icon}</span>}
							<span className={classNames("text", item.className)}>{item.title}</span>
						</>
					)}
				</MenuItem>
			</div>
		 )

	return (
		<div className={classNames("nested-menu-section", className)}>
			{isAddButton ? (
				<Button
					onClick={handleOpen}
					variant='text'
					children={title}
					className={classNames("button-icon", open && "active-button")}
					startIcon={icon as any}
				/>
				
			) : (
				<Button
					onClick={handleOpen}
					className={classNames("button-icon", open && "active-button")}
					startIcon={!icon ? <MoreHoriz /> : icon}
				/>
			)}

			<Menu
				open={open}
				onClose={handleClose}
				anchorReference='anchorEl'
				anchorEl={anchorEl}
				anchorOrigin={anchorOrigin ? anchorOrigin : { vertical: "bottom", horizontal: "left" }}
				transformOrigin={transformOrigin ? transformOrigin : { vertical: "top", horizontal: "left" }}
				className={`nested-menu ${className}`}
			>
				{items.map((item, index) => renderItem(item, index))}
			</Menu>
		</div>
	)
}

export default NestedMenu
