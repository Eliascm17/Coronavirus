import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			width: 400,
			border: '5px black'
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
			marginTop: '10%'
		},
		iconButton: {
			padding: 10,
			marginTop: '10%'
		},
		divider: {
			height: 28,
			margin: 4,
			marginTop: '10%'
		},
	})
);

interface ISearchProps {
		data: any
}

export const Search = () => {

		const classes = useStyles();

		return (
			<Paper 
				component="form" 
				className={classes.root}
				style={{
					marginLeft: '38%'
				}}>
				<InputBase
					className={classes.input}
					placeholder="Search US States"
					inputProps={{ "aria-label": "search google maps" }}
				/>
				<IconButton
					type="submit"
					className={classes.iconButton}
					aria-label="search"
				>
					<SearchIcon />
				</IconButton>
				<Divider className={classes.divider} orientation="vertical" />
				<IconButton
					color="primary"
					className={classes.iconButton}
					aria-label="directions"
				>
				</IconButton>
			</Paper>
		);
}