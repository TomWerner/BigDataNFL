db.playbyplay.aggregate([
	{ "$project" : {
		"qtr" : 1,
		"off" : 1,
		"season" : 1,
		"20_1_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_1_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_1_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_2_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_2_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_2_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_3_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_3_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_3_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_4_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"20_4_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"20_4_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 20]},
									{$gte: ["$ydline", 0]},
								]},
					then: 1, else: 0}
		},
		"40_1_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_1_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_1_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_2_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_2_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_2_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_3_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_3_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_3_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_4_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"40_4_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"40_4_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 40]},
									{$gte: ["$ydline", 20]},
								]},
					then: 1, else: 0}
		},
		"60_1_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_1_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_1_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_2_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_2_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_2_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_3_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_3_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_3_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_4_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"60_4_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"60_4_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 60]},
									{$gte: ["$ydline", 40]},
								]},
					then: 1, else: 0}
		},
		"80_1_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_1_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_1_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_2_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_2_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_2_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_3_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_3_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_3_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_4_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"80_4_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"80_4_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 80]},
									{$gte: ["$ydline", 60]},
								]},
					then: 1, else: 0}
		},
		"100_1_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_1_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_1_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_2_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_2_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_2_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_3_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_3_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_3_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_4_0_pass": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_0_run_middle": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_0_run_outside": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_0_punt": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_0_field_goal": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_0_total": {
			$cond: { if: {$and: [
									{$lt: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
		"100_4_1_pass": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PASS"]},
											{$eq: ["$play-choice", "PASS INCOMPLETE"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_1_run_middle": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN MIDDLE"]},
											{$eq: ["$play-choice", "RUN OTHER"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_1_run_outside": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "RUN LEFT"]},
											{$eq: ["$play-choice", "RUN RIGHT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_1_punt": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "PUNT"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_1_field_goal": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
									{$or: [ {$eq: ["$play-choice", "FIELD GOAL"]}]}
								]},
					then: 1, else: 0}
		},
		"100_4_1_total": {
			$cond: { if: {$and: [
									{$gte: ["togo", 5]},
									{$eq: ["$down", 1]},
									{$lt: ["$ydline", 100]},
									{$gte: ["$ydline", 80]},
								]},
					then: 1, else: 0}
		},
	},
	},
	{ "$group" : {
		"_id" : {	off: "$off",
					season: "$season",
				},
				"20_1_0_pass": {$sum: "$20_1_0_pass"},
		"20_1_0_run_middle": {$sum: "$20_1_0_run_middle"},
		"20_1_0_run_outside": {$sum: "$20_1_0_run_outside"},
		"20_1_0_punt": {$sum: "$20_1_0_punt"},
		"20_1_0_field_goal": {$sum: "$20_1_0_field_goal"},
		"20_1_0_total": {$sum: "$20_1_0_total"},
		"20_1_1_pass": {$sum: "$20_1_1_pass"},
		"20_1_1_run_middle": {$sum: "$20_1_1_run_middle"},
		"20_1_1_run_outside": {$sum: "$20_1_1_run_outside"},
		"20_1_1_punt": {$sum: "$20_1_1_punt"},
		"20_1_1_field_goal": {$sum: "$20_1_1_field_goal"},
		"20_1_1_total": {$sum: "$20_1_1_total"},
		"20_2_0_pass": {$sum: "$20_2_0_pass"},
		"20_2_0_run_middle": {$sum: "$20_2_0_run_middle"},
		"20_2_0_run_outside": {$sum: "$20_2_0_run_outside"},
		"20_2_0_punt": {$sum: "$20_2_0_punt"},
		"20_2_0_field_goal": {$sum: "$20_2_0_field_goal"},
		"20_2_0_total": {$sum: "$20_2_0_total"},
		"20_2_1_pass": {$sum: "$20_2_1_pass"},
		"20_2_1_run_middle": {$sum: "$20_2_1_run_middle"},
		"20_2_1_run_outside": {$sum: "$20_2_1_run_outside"},
		"20_2_1_punt": {$sum: "$20_2_1_punt"},
		"20_2_1_field_goal": {$sum: "$20_2_1_field_goal"},
		"20_2_1_total": {$sum: "$20_2_1_total"},
		"20_3_0_pass": {$sum: "$20_3_0_pass"},
		"20_3_0_run_middle": {$sum: "$20_3_0_run_middle"},
		"20_3_0_run_outside": {$sum: "$20_3_0_run_outside"},
		"20_3_0_punt": {$sum: "$20_3_0_punt"},
		"20_3_0_field_goal": {$sum: "$20_3_0_field_goal"},
		"20_3_0_total": {$sum: "$20_3_0_total"},
		"20_3_1_pass": {$sum: "$20_3_1_pass"},
		"20_3_1_run_middle": {$sum: "$20_3_1_run_middle"},
		"20_3_1_run_outside": {$sum: "$20_3_1_run_outside"},
		"20_3_1_punt": {$sum: "$20_3_1_punt"},
		"20_3_1_field_goal": {$sum: "$20_3_1_field_goal"},
		"20_3_1_total": {$sum: "$20_3_1_total"},
		"20_4_0_pass": {$sum: "$20_4_0_pass"},
		"20_4_0_run_middle": {$sum: "$20_4_0_run_middle"},
		"20_4_0_run_outside": {$sum: "$20_4_0_run_outside"},
		"20_4_0_punt": {$sum: "$20_4_0_punt"},
		"20_4_0_field_goal": {$sum: "$20_4_0_field_goal"},
		"20_4_0_total": {$sum: "$20_4_0_total"},
		"20_4_1_pass": {$sum: "$20_4_1_pass"},
		"20_4_1_run_middle": {$sum: "$20_4_1_run_middle"},
		"20_4_1_run_outside": {$sum: "$20_4_1_run_outside"},
		"20_4_1_punt": {$sum: "$20_4_1_punt"},
		"20_4_1_field_goal": {$sum: "$20_4_1_field_goal"},
		"20_4_1_total": {$sum: "$20_4_1_total"},
		"40_1_0_pass": {$sum: "$40_1_0_pass"},
		"40_1_0_run_middle": {$sum: "$40_1_0_run_middle"},
		"40_1_0_run_outside": {$sum: "$40_1_0_run_outside"},
		"40_1_0_punt": {$sum: "$40_1_0_punt"},
		"40_1_0_field_goal": {$sum: "$40_1_0_field_goal"},
		"40_1_0_total": {$sum: "$40_1_0_total"},
		"40_1_1_pass": {$sum: "$40_1_1_pass"},
		"40_1_1_run_middle": {$sum: "$40_1_1_run_middle"},
		"40_1_1_run_outside": {$sum: "$40_1_1_run_outside"},
		"40_1_1_punt": {$sum: "$40_1_1_punt"},
		"40_1_1_field_goal": {$sum: "$40_1_1_field_goal"},
		"40_1_1_total": {$sum: "$40_1_1_total"},
		"40_2_0_pass": {$sum: "$40_2_0_pass"},
		"40_2_0_run_middle": {$sum: "$40_2_0_run_middle"},
		"40_2_0_run_outside": {$sum: "$40_2_0_run_outside"},
		"40_2_0_punt": {$sum: "$40_2_0_punt"},
		"40_2_0_field_goal": {$sum: "$40_2_0_field_goal"},
		"40_2_0_total": {$sum: "$40_2_0_total"},
		"40_2_1_pass": {$sum: "$40_2_1_pass"},
		"40_2_1_run_middle": {$sum: "$40_2_1_run_middle"},
		"40_2_1_run_outside": {$sum: "$40_2_1_run_outside"},
		"40_2_1_punt": {$sum: "$40_2_1_punt"},
		"40_2_1_field_goal": {$sum: "$40_2_1_field_goal"},
		"40_2_1_total": {$sum: "$40_2_1_total"},
		"40_3_0_pass": {$sum: "$40_3_0_pass"},
		"40_3_0_run_middle": {$sum: "$40_3_0_run_middle"},
		"40_3_0_run_outside": {$sum: "$40_3_0_run_outside"},
		"40_3_0_punt": {$sum: "$40_3_0_punt"},
		"40_3_0_field_goal": {$sum: "$40_3_0_field_goal"},
		"40_3_0_total": {$sum: "$40_3_0_total"},
		"40_3_1_pass": {$sum: "$40_3_1_pass"},
		"40_3_1_run_middle": {$sum: "$40_3_1_run_middle"},
		"40_3_1_run_outside": {$sum: "$40_3_1_run_outside"},
		"40_3_1_punt": {$sum: "$40_3_1_punt"},
		"40_3_1_field_goal": {$sum: "$40_3_1_field_goal"},
		"40_3_1_total": {$sum: "$40_3_1_total"},
		"40_4_0_pass": {$sum: "$40_4_0_pass"},
		"40_4_0_run_middle": {$sum: "$40_4_0_run_middle"},
		"40_4_0_run_outside": {$sum: "$40_4_0_run_outside"},
		"40_4_0_punt": {$sum: "$40_4_0_punt"},
		"40_4_0_field_goal": {$sum: "$40_4_0_field_goal"},
		"40_4_0_total": {$sum: "$40_4_0_total"},
		"40_4_1_pass": {$sum: "$40_4_1_pass"},
		"40_4_1_run_middle": {$sum: "$40_4_1_run_middle"},
		"40_4_1_run_outside": {$sum: "$40_4_1_run_outside"},
		"40_4_1_punt": {$sum: "$40_4_1_punt"},
		"40_4_1_field_goal": {$sum: "$40_4_1_field_goal"},
		"40_4_1_total": {$sum: "$40_4_1_total"},
		"60_1_0_pass": {$sum: "$60_1_0_pass"},
		"60_1_0_run_middle": {$sum: "$60_1_0_run_middle"},
		"60_1_0_run_outside": {$sum: "$60_1_0_run_outside"},
		"60_1_0_punt": {$sum: "$60_1_0_punt"},
		"60_1_0_field_goal": {$sum: "$60_1_0_field_goal"},
		"60_1_0_total": {$sum: "$60_1_0_total"},
		"60_1_1_pass": {$sum: "$60_1_1_pass"},
		"60_1_1_run_middle": {$sum: "$60_1_1_run_middle"},
		"60_1_1_run_outside": {$sum: "$60_1_1_run_outside"},
		"60_1_1_punt": {$sum: "$60_1_1_punt"},
		"60_1_1_field_goal": {$sum: "$60_1_1_field_goal"},
		"60_1_1_total": {$sum: "$60_1_1_total"},
		"60_2_0_pass": {$sum: "$60_2_0_pass"},
		"60_2_0_run_middle": {$sum: "$60_2_0_run_middle"},
		"60_2_0_run_outside": {$sum: "$60_2_0_run_outside"},
		"60_2_0_punt": {$sum: "$60_2_0_punt"},
		"60_2_0_field_goal": {$sum: "$60_2_0_field_goal"},
		"60_2_0_total": {$sum: "$60_2_0_total"},
		"60_2_1_pass": {$sum: "$60_2_1_pass"},
		"60_2_1_run_middle": {$sum: "$60_2_1_run_middle"},
		"60_2_1_run_outside": {$sum: "$60_2_1_run_outside"},
		"60_2_1_punt": {$sum: "$60_2_1_punt"},
		"60_2_1_field_goal": {$sum: "$60_2_1_field_goal"},
		"60_2_1_total": {$sum: "$60_2_1_total"},
		"60_3_0_pass": {$sum: "$60_3_0_pass"},
		"60_3_0_run_middle": {$sum: "$60_3_0_run_middle"},
		"60_3_0_run_outside": {$sum: "$60_3_0_run_outside"},
		"60_3_0_punt": {$sum: "$60_3_0_punt"},
		"60_3_0_field_goal": {$sum: "$60_3_0_field_goal"},
		"60_3_0_total": {$sum: "$60_3_0_total"},
		"60_3_1_pass": {$sum: "$60_3_1_pass"},
		"60_3_1_run_middle": {$sum: "$60_3_1_run_middle"},
		"60_3_1_run_outside": {$sum: "$60_3_1_run_outside"},
		"60_3_1_punt": {$sum: "$60_3_1_punt"},
		"60_3_1_field_goal": {$sum: "$60_3_1_field_goal"},
		"60_3_1_total": {$sum: "$60_3_1_total"},
		"60_4_0_pass": {$sum: "$60_4_0_pass"},
		"60_4_0_run_middle": {$sum: "$60_4_0_run_middle"},
		"60_4_0_run_outside": {$sum: "$60_4_0_run_outside"},
		"60_4_0_punt": {$sum: "$60_4_0_punt"},
		"60_4_0_field_goal": {$sum: "$60_4_0_field_goal"},
		"60_4_0_total": {$sum: "$60_4_0_total"},
		"60_4_1_pass": {$sum: "$60_4_1_pass"},
		"60_4_1_run_middle": {$sum: "$60_4_1_run_middle"},
		"60_4_1_run_outside": {$sum: "$60_4_1_run_outside"},
		"60_4_1_punt": {$sum: "$60_4_1_punt"},
		"60_4_1_field_goal": {$sum: "$60_4_1_field_goal"},
		"60_4_1_total": {$sum: "$60_4_1_total"},
		"80_1_0_pass": {$sum: "$80_1_0_pass"},
		"80_1_0_run_middle": {$sum: "$80_1_0_run_middle"},
		"80_1_0_run_outside": {$sum: "$80_1_0_run_outside"},
		"80_1_0_punt": {$sum: "$80_1_0_punt"},
		"80_1_0_field_goal": {$sum: "$80_1_0_field_goal"},
		"80_1_0_total": {$sum: "$80_1_0_total"},
		"80_1_1_pass": {$sum: "$80_1_1_pass"},
		"80_1_1_run_middle": {$sum: "$80_1_1_run_middle"},
		"80_1_1_run_outside": {$sum: "$80_1_1_run_outside"},
		"80_1_1_punt": {$sum: "$80_1_1_punt"},
		"80_1_1_field_goal": {$sum: "$80_1_1_field_goal"},
		"80_1_1_total": {$sum: "$80_1_1_total"},
		"80_2_0_pass": {$sum: "$80_2_0_pass"},
		"80_2_0_run_middle": {$sum: "$80_2_0_run_middle"},
		"80_2_0_run_outside": {$sum: "$80_2_0_run_outside"},
		"80_2_0_punt": {$sum: "$80_2_0_punt"},
		"80_2_0_field_goal": {$sum: "$80_2_0_field_goal"},
		"80_2_0_total": {$sum: "$80_2_0_total"},
		"80_2_1_pass": {$sum: "$80_2_1_pass"},
		"80_2_1_run_middle": {$sum: "$80_2_1_run_middle"},
		"80_2_1_run_outside": {$sum: "$80_2_1_run_outside"},
		"80_2_1_punt": {$sum: "$80_2_1_punt"},
		"80_2_1_field_goal": {$sum: "$80_2_1_field_goal"},
		"80_2_1_total": {$sum: "$80_2_1_total"},
		"80_3_0_pass": {$sum: "$80_3_0_pass"},
		"80_3_0_run_middle": {$sum: "$80_3_0_run_middle"},
		"80_3_0_run_outside": {$sum: "$80_3_0_run_outside"},
		"80_3_0_punt": {$sum: "$80_3_0_punt"},
		"80_3_0_field_goal": {$sum: "$80_3_0_field_goal"},
		"80_3_0_total": {$sum: "$80_3_0_total"},
		"80_3_1_pass": {$sum: "$80_3_1_pass"},
		"80_3_1_run_middle": {$sum: "$80_3_1_run_middle"},
		"80_3_1_run_outside": {$sum: "$80_3_1_run_outside"},
		"80_3_1_punt": {$sum: "$80_3_1_punt"},
		"80_3_1_field_goal": {$sum: "$80_3_1_field_goal"},
		"80_3_1_total": {$sum: "$80_3_1_total"},
		"80_4_0_pass": {$sum: "$80_4_0_pass"},
		"80_4_0_run_middle": {$sum: "$80_4_0_run_middle"},
		"80_4_0_run_outside": {$sum: "$80_4_0_run_outside"},
		"80_4_0_punt": {$sum: "$80_4_0_punt"},
		"80_4_0_field_goal": {$sum: "$80_4_0_field_goal"},
		"80_4_0_total": {$sum: "$80_4_0_total"},
		"80_4_1_pass": {$sum: "$80_4_1_pass"},
		"80_4_1_run_middle": {$sum: "$80_4_1_run_middle"},
		"80_4_1_run_outside": {$sum: "$80_4_1_run_outside"},
		"80_4_1_punt": {$sum: "$80_4_1_punt"},
		"80_4_1_field_goal": {$sum: "$80_4_1_field_goal"},
		"80_4_1_total": {$sum: "$80_4_1_total"},
		"100_1_0_pass": {$sum: "$100_1_0_pass"},
		"100_1_0_run_middle": {$sum: "$100_1_0_run_middle"},
		"100_1_0_run_outside": {$sum: "$100_1_0_run_outside"},
		"100_1_0_punt": {$sum: "$100_1_0_punt"},
		"100_1_0_field_goal": {$sum: "$100_1_0_field_goal"},
		"100_1_0_total": {$sum: "$100_1_0_total"},
		"100_1_1_pass": {$sum: "$100_1_1_pass"},
		"100_1_1_run_middle": {$sum: "$100_1_1_run_middle"},
		"100_1_1_run_outside": {$sum: "$100_1_1_run_outside"},
		"100_1_1_punt": {$sum: "$100_1_1_punt"},
		"100_1_1_field_goal": {$sum: "$100_1_1_field_goal"},
		"100_1_1_total": {$sum: "$100_1_1_total"},
		"100_2_0_pass": {$sum: "$100_2_0_pass"},
		"100_2_0_run_middle": {$sum: "$100_2_0_run_middle"},
		"100_2_0_run_outside": {$sum: "$100_2_0_run_outside"},
		"100_2_0_punt": {$sum: "$100_2_0_punt"},
		"100_2_0_field_goal": {$sum: "$100_2_0_field_goal"},
		"100_2_0_total": {$sum: "$100_2_0_total"},
		"100_2_1_pass": {$sum: "$100_2_1_pass"},
		"100_2_1_run_middle": {$sum: "$100_2_1_run_middle"},
		"100_2_1_run_outside": {$sum: "$100_2_1_run_outside"},
		"100_2_1_punt": {$sum: "$100_2_1_punt"},
		"100_2_1_field_goal": {$sum: "$100_2_1_field_goal"},
		"100_2_1_total": {$sum: "$100_2_1_total"},
		"100_3_0_pass": {$sum: "$100_3_0_pass"},
		"100_3_0_run_middle": {$sum: "$100_3_0_run_middle"},
		"100_3_0_run_outside": {$sum: "$100_3_0_run_outside"},
		"100_3_0_punt": {$sum: "$100_3_0_punt"},
		"100_3_0_field_goal": {$sum: "$100_3_0_field_goal"},
		"100_3_0_total": {$sum: "$100_3_0_total"},
		"100_3_1_pass": {$sum: "$100_3_1_pass"},
		"100_3_1_run_middle": {$sum: "$100_3_1_run_middle"},
		"100_3_1_run_outside": {$sum: "$100_3_1_run_outside"},
		"100_3_1_punt": {$sum: "$100_3_1_punt"},
		"100_3_1_field_goal": {$sum: "$100_3_1_field_goal"},
		"100_3_1_total": {$sum: "$100_3_1_total"},
		"100_4_0_pass": {$sum: "$100_4_0_pass"},
		"100_4_0_run_middle": {$sum: "$100_4_0_run_middle"},
		"100_4_0_run_outside": {$sum: "$100_4_0_run_outside"},
		"100_4_0_punt": {$sum: "$100_4_0_punt"},
		"100_4_0_field_goal": {$sum: "$100_4_0_field_goal"},
		"100_4_0_total": {$sum: "$100_4_0_total"},
		"100_4_1_pass": {$sum: "$100_4_1_pass"},
		"100_4_1_run_middle": {$sum: "$100_4_1_run_middle"},
		"100_4_1_run_outside": {$sum: "$100_4_1_run_outside"},
		"100_4_1_punt": {$sum: "$100_4_1_punt"},
		"100_4_1_field_goal": {$sum: "$100_4_1_field_goal"},
		"100_4_1_total": {$sum: "$100_4_1_total"},
	},
	},
	{ "$project" : {
		"20_1_0_pass":
					{$cond: { if: {$gt: ["$20_1_0_total", 0]},
					then: {$divide: ["$20_1_0_pass", "$20_1_0_total"]}, else: 0}},
		"20_1_0_run_middle":
					{$cond: { if: {$gt: ["$20_1_0_total", 0]},
					then: {$divide: ["$20_1_0_run_middle", "$20_1_0_total"]}, else: 0}},
		"20_1_0_run_outside":
					{$cond: { if: {$gt: ["$20_1_0_total", 0]},
					then: {$divide: ["$20_1_0_run_outside", "$20_1_0_total"]}, else: 0}},
		"20_1_0_punt":
					{$cond: { if: {$gt: ["$20_1_0_total", 0]},
					then: {$divide: ["$20_1_0_punt", "$20_1_0_total"]}, else: 0}},
		"20_1_0_field_goal":
					{$cond: { if: {$gt: ["$20_1_0_total", 0]},
					then: {$divide: ["$20_1_0_field_goal", "$20_1_0_total"]}, else: 0}},
		"20_1_1_pass":
					{$cond: { if: {$gt: ["$20_1_1_total", 0]},
					then: {$divide: ["$20_1_1_pass", "$20_1_1_total"]}, else: 0}},
		"20_1_1_run_middle":
					{$cond: { if: {$gt: ["$20_1_1_total", 0]},
					then: {$divide: ["$20_1_1_run_middle", "$20_1_1_total"]}, else: 0}},
		"20_1_1_run_outside":
					{$cond: { if: {$gt: ["$20_1_1_total", 0]},
					then: {$divide: ["$20_1_1_run_outside", "$20_1_1_total"]}, else: 0}},
		"20_1_1_punt":
					{$cond: { if: {$gt: ["$20_1_1_total", 0]},
					then: {$divide: ["$20_1_1_punt", "$20_1_1_total"]}, else: 0}},
		"20_1_1_field_goal":
					{$cond: { if: {$gt: ["$20_1_1_total", 0]},
					then: {$divide: ["$20_1_1_field_goal", "$20_1_1_total"]}, else: 0}},
		"20_2_0_pass":
					{$cond: { if: {$gt: ["$20_2_0_total", 0]},
					then: {$divide: ["$20_2_0_pass", "$20_2_0_total"]}, else: 0}},
		"20_2_0_run_middle":
					{$cond: { if: {$gt: ["$20_2_0_total", 0]},
					then: {$divide: ["$20_2_0_run_middle", "$20_2_0_total"]}, else: 0}},
		"20_2_0_run_outside":
					{$cond: { if: {$gt: ["$20_2_0_total", 0]},
					then: {$divide: ["$20_2_0_run_outside", "$20_2_0_total"]}, else: 0}},
		"20_2_0_punt":
					{$cond: { if: {$gt: ["$20_2_0_total", 0]},
					then: {$divide: ["$20_2_0_punt", "$20_2_0_total"]}, else: 0}},
		"20_2_0_field_goal":
					{$cond: { if: {$gt: ["$20_2_0_total", 0]},
					then: {$divide: ["$20_2_0_field_goal", "$20_2_0_total"]}, else: 0}},
		"20_2_1_pass":
					{$cond: { if: {$gt: ["$20_2_1_total", 0]},
					then: {$divide: ["$20_2_1_pass", "$20_2_1_total"]}, else: 0}},
		"20_2_1_run_middle":
					{$cond: { if: {$gt: ["$20_2_1_total", 0]},
					then: {$divide: ["$20_2_1_run_middle", "$20_2_1_total"]}, else: 0}},
		"20_2_1_run_outside":
					{$cond: { if: {$gt: ["$20_2_1_total", 0]},
					then: {$divide: ["$20_2_1_run_outside", "$20_2_1_total"]}, else: 0}},
		"20_2_1_punt":
					{$cond: { if: {$gt: ["$20_2_1_total", 0]},
					then: {$divide: ["$20_2_1_punt", "$20_2_1_total"]}, else: 0}},
		"20_2_1_field_goal":
					{$cond: { if: {$gt: ["$20_2_1_total", 0]},
					then: {$divide: ["$20_2_1_field_goal", "$20_2_1_total"]}, else: 0}},
		"20_3_0_pass":
					{$cond: { if: {$gt: ["$20_3_0_total", 0]},
					then: {$divide: ["$20_3_0_pass", "$20_3_0_total"]}, else: 0}},
		"20_3_0_run_middle":
					{$cond: { if: {$gt: ["$20_3_0_total", 0]},
					then: {$divide: ["$20_3_0_run_middle", "$20_3_0_total"]}, else: 0}},
		"20_3_0_run_outside":
					{$cond: { if: {$gt: ["$20_3_0_total", 0]},
					then: {$divide: ["$20_3_0_run_outside", "$20_3_0_total"]}, else: 0}},
		"20_3_0_punt":
					{$cond: { if: {$gt: ["$20_3_0_total", 0]},
					then: {$divide: ["$20_3_0_punt", "$20_3_0_total"]}, else: 0}},
		"20_3_0_field_goal":
					{$cond: { if: {$gt: ["$20_3_0_total", 0]},
					then: {$divide: ["$20_3_0_field_goal", "$20_3_0_total"]}, else: 0}},
		"20_3_1_pass":
					{$cond: { if: {$gt: ["$20_3_1_total", 0]},
					then: {$divide: ["$20_3_1_pass", "$20_3_1_total"]}, else: 0}},
		"20_3_1_run_middle":
					{$cond: { if: {$gt: ["$20_3_1_total", 0]},
					then: {$divide: ["$20_3_1_run_middle", "$20_3_1_total"]}, else: 0}},
		"20_3_1_run_outside":
					{$cond: { if: {$gt: ["$20_3_1_total", 0]},
					then: {$divide: ["$20_3_1_run_outside", "$20_3_1_total"]}, else: 0}},
		"20_3_1_punt":
					{$cond: { if: {$gt: ["$20_3_1_total", 0]},
					then: {$divide: ["$20_3_1_punt", "$20_3_1_total"]}, else: 0}},
		"20_3_1_field_goal":
					{$cond: { if: {$gt: ["$20_3_1_total", 0]},
					then: {$divide: ["$20_3_1_field_goal", "$20_3_1_total"]}, else: 0}},
		"20_4_0_pass":
					{$cond: { if: {$gt: ["$20_4_0_total", 0]},
					then: {$divide: ["$20_4_0_pass", "$20_4_0_total"]}, else: 0}},
		"20_4_0_run_middle":
					{$cond: { if: {$gt: ["$20_4_0_total", 0]},
					then: {$divide: ["$20_4_0_run_middle", "$20_4_0_total"]}, else: 0}},
		"20_4_0_run_outside":
					{$cond: { if: {$gt: ["$20_4_0_total", 0]},
					then: {$divide: ["$20_4_0_run_outside", "$20_4_0_total"]}, else: 0}},
		"20_4_0_punt":
					{$cond: { if: {$gt: ["$20_4_0_total", 0]},
					then: {$divide: ["$20_4_0_punt", "$20_4_0_total"]}, else: 0}},
		"20_4_0_field_goal":
					{$cond: { if: {$gt: ["$20_4_0_total", 0]},
					then: {$divide: ["$20_4_0_field_goal", "$20_4_0_total"]}, else: 0}},
		"20_4_1_pass":
					{$cond: { if: {$gt: ["$20_4_1_total", 0]},
					then: {$divide: ["$20_4_1_pass", "$20_4_1_total"]}, else: 0}},
		"20_4_1_run_middle":
					{$cond: { if: {$gt: ["$20_4_1_total", 0]},
					then: {$divide: ["$20_4_1_run_middle", "$20_4_1_total"]}, else: 0}},
		"20_4_1_run_outside":
					{$cond: { if: {$gt: ["$20_4_1_total", 0]},
					then: {$divide: ["$20_4_1_run_outside", "$20_4_1_total"]}, else: 0}},
		"20_4_1_punt":
					{$cond: { if: {$gt: ["$20_4_1_total", 0]},
					then: {$divide: ["$20_4_1_punt", "$20_4_1_total"]}, else: 0}},
		"20_4_1_field_goal":
					{$cond: { if: {$gt: ["$20_4_1_total", 0]},
					then: {$divide: ["$20_4_1_field_goal", "$20_4_1_total"]}, else: 0}},
		"40_1_0_pass":
					{$cond: { if: {$gt: ["$40_1_0_total", 0]},
					then: {$divide: ["$40_1_0_pass", "$40_1_0_total"]}, else: 0}},
		"40_1_0_run_middle":
					{$cond: { if: {$gt: ["$40_1_0_total", 0]},
					then: {$divide: ["$40_1_0_run_middle", "$40_1_0_total"]}, else: 0}},
		"40_1_0_run_outside":
					{$cond: { if: {$gt: ["$40_1_0_total", 0]},
					then: {$divide: ["$40_1_0_run_outside", "$40_1_0_total"]}, else: 0}},
		"40_1_0_punt":
					{$cond: { if: {$gt: ["$40_1_0_total", 0]},
					then: {$divide: ["$40_1_0_punt", "$40_1_0_total"]}, else: 0}},
		"40_1_0_field_goal":
					{$cond: { if: {$gt: ["$40_1_0_total", 0]},
					then: {$divide: ["$40_1_0_field_goal", "$40_1_0_total"]}, else: 0}},
		"40_1_1_pass":
					{$cond: { if: {$gt: ["$40_1_1_total", 0]},
					then: {$divide: ["$40_1_1_pass", "$40_1_1_total"]}, else: 0}},
		"40_1_1_run_middle":
					{$cond: { if: {$gt: ["$40_1_1_total", 0]},
					then: {$divide: ["$40_1_1_run_middle", "$40_1_1_total"]}, else: 0}},
		"40_1_1_run_outside":
					{$cond: { if: {$gt: ["$40_1_1_total", 0]},
					then: {$divide: ["$40_1_1_run_outside", "$40_1_1_total"]}, else: 0}},
		"40_1_1_punt":
					{$cond: { if: {$gt: ["$40_1_1_total", 0]},
					then: {$divide: ["$40_1_1_punt", "$40_1_1_total"]}, else: 0}},
		"40_1_1_field_goal":
					{$cond: { if: {$gt: ["$40_1_1_total", 0]},
					then: {$divide: ["$40_1_1_field_goal", "$40_1_1_total"]}, else: 0}},
		"40_2_0_pass":
					{$cond: { if: {$gt: ["$40_2_0_total", 0]},
					then: {$divide: ["$40_2_0_pass", "$40_2_0_total"]}, else: 0}},
		"40_2_0_run_middle":
					{$cond: { if: {$gt: ["$40_2_0_total", 0]},
					then: {$divide: ["$40_2_0_run_middle", "$40_2_0_total"]}, else: 0}},
		"40_2_0_run_outside":
					{$cond: { if: {$gt: ["$40_2_0_total", 0]},
					then: {$divide: ["$40_2_0_run_outside", "$40_2_0_total"]}, else: 0}},
		"40_2_0_punt":
					{$cond: { if: {$gt: ["$40_2_0_total", 0]},
					then: {$divide: ["$40_2_0_punt", "$40_2_0_total"]}, else: 0}},
		"40_2_0_field_goal":
					{$cond: { if: {$gt: ["$40_2_0_total", 0]},
					then: {$divide: ["$40_2_0_field_goal", "$40_2_0_total"]}, else: 0}},
		"40_2_1_pass":
					{$cond: { if: {$gt: ["$40_2_1_total", 0]},
					then: {$divide: ["$40_2_1_pass", "$40_2_1_total"]}, else: 0}},
		"40_2_1_run_middle":
					{$cond: { if: {$gt: ["$40_2_1_total", 0]},
					then: {$divide: ["$40_2_1_run_middle", "$40_2_1_total"]}, else: 0}},
		"40_2_1_run_outside":
					{$cond: { if: {$gt: ["$40_2_1_total", 0]},
					then: {$divide: ["$40_2_1_run_outside", "$40_2_1_total"]}, else: 0}},
		"40_2_1_punt":
					{$cond: { if: {$gt: ["$40_2_1_total", 0]},
					then: {$divide: ["$40_2_1_punt", "$40_2_1_total"]}, else: 0}},
		"40_2_1_field_goal":
					{$cond: { if: {$gt: ["$40_2_1_total", 0]},
					then: {$divide: ["$40_2_1_field_goal", "$40_2_1_total"]}, else: 0}},
		"40_3_0_pass":
					{$cond: { if: {$gt: ["$40_3_0_total", 0]},
					then: {$divide: ["$40_3_0_pass", "$40_3_0_total"]}, else: 0}},
		"40_3_0_run_middle":
					{$cond: { if: {$gt: ["$40_3_0_total", 0]},
					then: {$divide: ["$40_3_0_run_middle", "$40_3_0_total"]}, else: 0}},
		"40_3_0_run_outside":
					{$cond: { if: {$gt: ["$40_3_0_total", 0]},
					then: {$divide: ["$40_3_0_run_outside", "$40_3_0_total"]}, else: 0}},
		"40_3_0_punt":
					{$cond: { if: {$gt: ["$40_3_0_total", 0]},
					then: {$divide: ["$40_3_0_punt", "$40_3_0_total"]}, else: 0}},
		"40_3_0_field_goal":
					{$cond: { if: {$gt: ["$40_3_0_total", 0]},
					then: {$divide: ["$40_3_0_field_goal", "$40_3_0_total"]}, else: 0}},
		"40_3_1_pass":
					{$cond: { if: {$gt: ["$40_3_1_total", 0]},
					then: {$divide: ["$40_3_1_pass", "$40_3_1_total"]}, else: 0}},
		"40_3_1_run_middle":
					{$cond: { if: {$gt: ["$40_3_1_total", 0]},
					then: {$divide: ["$40_3_1_run_middle", "$40_3_1_total"]}, else: 0}},
		"40_3_1_run_outside":
					{$cond: { if: {$gt: ["$40_3_1_total", 0]},
					then: {$divide: ["$40_3_1_run_outside", "$40_3_1_total"]}, else: 0}},
		"40_3_1_punt":
					{$cond: { if: {$gt: ["$40_3_1_total", 0]},
					then: {$divide: ["$40_3_1_punt", "$40_3_1_total"]}, else: 0}},
		"40_3_1_field_goal":
					{$cond: { if: {$gt: ["$40_3_1_total", 0]},
					then: {$divide: ["$40_3_1_field_goal", "$40_3_1_total"]}, else: 0}},
		"40_4_0_pass":
					{$cond: { if: {$gt: ["$40_4_0_total", 0]},
					then: {$divide: ["$40_4_0_pass", "$40_4_0_total"]}, else: 0}},
		"40_4_0_run_middle":
					{$cond: { if: {$gt: ["$40_4_0_total", 0]},
					then: {$divide: ["$40_4_0_run_middle", "$40_4_0_total"]}, else: 0}},
		"40_4_0_run_outside":
					{$cond: { if: {$gt: ["$40_4_0_total", 0]},
					then: {$divide: ["$40_4_0_run_outside", "$40_4_0_total"]}, else: 0}},
		"40_4_0_punt":
					{$cond: { if: {$gt: ["$40_4_0_total", 0]},
					then: {$divide: ["$40_4_0_punt", "$40_4_0_total"]}, else: 0}},
		"40_4_0_field_goal":
					{$cond: { if: {$gt: ["$40_4_0_total", 0]},
					then: {$divide: ["$40_4_0_field_goal", "$40_4_0_total"]}, else: 0}},
		"40_4_1_pass":
					{$cond: { if: {$gt: ["$40_4_1_total", 0]},
					then: {$divide: ["$40_4_1_pass", "$40_4_1_total"]}, else: 0}},
		"40_4_1_run_middle":
					{$cond: { if: {$gt: ["$40_4_1_total", 0]},
					then: {$divide: ["$40_4_1_run_middle", "$40_4_1_total"]}, else: 0}},
		"40_4_1_run_outside":
					{$cond: { if: {$gt: ["$40_4_1_total", 0]},
					then: {$divide: ["$40_4_1_run_outside", "$40_4_1_total"]}, else: 0}},
		"40_4_1_punt":
					{$cond: { if: {$gt: ["$40_4_1_total", 0]},
					then: {$divide: ["$40_4_1_punt", "$40_4_1_total"]}, else: 0}},
		"40_4_1_field_goal":
					{$cond: { if: {$gt: ["$40_4_1_total", 0]},
					then: {$divide: ["$40_4_1_field_goal", "$40_4_1_total"]}, else: 0}},
		"60_1_0_pass":
					{$cond: { if: {$gt: ["$60_1_0_total", 0]},
					then: {$divide: ["$60_1_0_pass", "$60_1_0_total"]}, else: 0}},
		"60_1_0_run_middle":
					{$cond: { if: {$gt: ["$60_1_0_total", 0]},
					then: {$divide: ["$60_1_0_run_middle", "$60_1_0_total"]}, else: 0}},
		"60_1_0_run_outside":
					{$cond: { if: {$gt: ["$60_1_0_total", 0]},
					then: {$divide: ["$60_1_0_run_outside", "$60_1_0_total"]}, else: 0}},
		"60_1_0_punt":
					{$cond: { if: {$gt: ["$60_1_0_total", 0]},
					then: {$divide: ["$60_1_0_punt", "$60_1_0_total"]}, else: 0}},
		"60_1_0_field_goal":
					{$cond: { if: {$gt: ["$60_1_0_total", 0]},
					then: {$divide: ["$60_1_0_field_goal", "$60_1_0_total"]}, else: 0}},
		"60_1_1_pass":
					{$cond: { if: {$gt: ["$60_1_1_total", 0]},
					then: {$divide: ["$60_1_1_pass", "$60_1_1_total"]}, else: 0}},
		"60_1_1_run_middle":
					{$cond: { if: {$gt: ["$60_1_1_total", 0]},
					then: {$divide: ["$60_1_1_run_middle", "$60_1_1_total"]}, else: 0}},
		"60_1_1_run_outside":
					{$cond: { if: {$gt: ["$60_1_1_total", 0]},
					then: {$divide: ["$60_1_1_run_outside", "$60_1_1_total"]}, else: 0}},
		"60_1_1_punt":
					{$cond: { if: {$gt: ["$60_1_1_total", 0]},
					then: {$divide: ["$60_1_1_punt", "$60_1_1_total"]}, else: 0}},
		"60_1_1_field_goal":
					{$cond: { if: {$gt: ["$60_1_1_total", 0]},
					then: {$divide: ["$60_1_1_field_goal", "$60_1_1_total"]}, else: 0}},
		"60_2_0_pass":
					{$cond: { if: {$gt: ["$60_2_0_total", 0]},
					then: {$divide: ["$60_2_0_pass", "$60_2_0_total"]}, else: 0}},
		"60_2_0_run_middle":
					{$cond: { if: {$gt: ["$60_2_0_total", 0]},
					then: {$divide: ["$60_2_0_run_middle", "$60_2_0_total"]}, else: 0}},
		"60_2_0_run_outside":
					{$cond: { if: {$gt: ["$60_2_0_total", 0]},
					then: {$divide: ["$60_2_0_run_outside", "$60_2_0_total"]}, else: 0}},
		"60_2_0_punt":
					{$cond: { if: {$gt: ["$60_2_0_total", 0]},
					then: {$divide: ["$60_2_0_punt", "$60_2_0_total"]}, else: 0}},
		"60_2_0_field_goal":
					{$cond: { if: {$gt: ["$60_2_0_total", 0]},
					then: {$divide: ["$60_2_0_field_goal", "$60_2_0_total"]}, else: 0}},
		"60_2_1_pass":
					{$cond: { if: {$gt: ["$60_2_1_total", 0]},
					then: {$divide: ["$60_2_1_pass", "$60_2_1_total"]}, else: 0}},
		"60_2_1_run_middle":
					{$cond: { if: {$gt: ["$60_2_1_total", 0]},
					then: {$divide: ["$60_2_1_run_middle", "$60_2_1_total"]}, else: 0}},
		"60_2_1_run_outside":
					{$cond: { if: {$gt: ["$60_2_1_total", 0]},
					then: {$divide: ["$60_2_1_run_outside", "$60_2_1_total"]}, else: 0}},
		"60_2_1_punt":
					{$cond: { if: {$gt: ["$60_2_1_total", 0]},
					then: {$divide: ["$60_2_1_punt", "$60_2_1_total"]}, else: 0}},
		"60_2_1_field_goal":
					{$cond: { if: {$gt: ["$60_2_1_total", 0]},
					then: {$divide: ["$60_2_1_field_goal", "$60_2_1_total"]}, else: 0}},
		"60_3_0_pass":
					{$cond: { if: {$gt: ["$60_3_0_total", 0]},
					then: {$divide: ["$60_3_0_pass", "$60_3_0_total"]}, else: 0}},
		"60_3_0_run_middle":
					{$cond: { if: {$gt: ["$60_3_0_total", 0]},
					then: {$divide: ["$60_3_0_run_middle", "$60_3_0_total"]}, else: 0}},
		"60_3_0_run_outside":
					{$cond: { if: {$gt: ["$60_3_0_total", 0]},
					then: {$divide: ["$60_3_0_run_outside", "$60_3_0_total"]}, else: 0}},
		"60_3_0_punt":
					{$cond: { if: {$gt: ["$60_3_0_total", 0]},
					then: {$divide: ["$60_3_0_punt", "$60_3_0_total"]}, else: 0}},
		"60_3_0_field_goal":
					{$cond: { if: {$gt: ["$60_3_0_total", 0]},
					then: {$divide: ["$60_3_0_field_goal", "$60_3_0_total"]}, else: 0}},
		"60_3_1_pass":
					{$cond: { if: {$gt: ["$60_3_1_total", 0]},
					then: {$divide: ["$60_3_1_pass", "$60_3_1_total"]}, else: 0}},
		"60_3_1_run_middle":
					{$cond: { if: {$gt: ["$60_3_1_total", 0]},
					then: {$divide: ["$60_3_1_run_middle", "$60_3_1_total"]}, else: 0}},
		"60_3_1_run_outside":
					{$cond: { if: {$gt: ["$60_3_1_total", 0]},
					then: {$divide: ["$60_3_1_run_outside", "$60_3_1_total"]}, else: 0}},
		"60_3_1_punt":
					{$cond: { if: {$gt: ["$60_3_1_total", 0]},
					then: {$divide: ["$60_3_1_punt", "$60_3_1_total"]}, else: 0}},
		"60_3_1_field_goal":
					{$cond: { if: {$gt: ["$60_3_1_total", 0]},
					then: {$divide: ["$60_3_1_field_goal", "$60_3_1_total"]}, else: 0}},
		"60_4_0_pass":
					{$cond: { if: {$gt: ["$60_4_0_total", 0]},
					then: {$divide: ["$60_4_0_pass", "$60_4_0_total"]}, else: 0}},
		"60_4_0_run_middle":
					{$cond: { if: {$gt: ["$60_4_0_total", 0]},
					then: {$divide: ["$60_4_0_run_middle", "$60_4_0_total"]}, else: 0}},
		"60_4_0_run_outside":
					{$cond: { if: {$gt: ["$60_4_0_total", 0]},
					then: {$divide: ["$60_4_0_run_outside", "$60_4_0_total"]}, else: 0}},
		"60_4_0_punt":
					{$cond: { if: {$gt: ["$60_4_0_total", 0]},
					then: {$divide: ["$60_4_0_punt", "$60_4_0_total"]}, else: 0}},
		"60_4_0_field_goal":
					{$cond: { if: {$gt: ["$60_4_0_total", 0]},
					then: {$divide: ["$60_4_0_field_goal", "$60_4_0_total"]}, else: 0}},
		"60_4_1_pass":
					{$cond: { if: {$gt: ["$60_4_1_total", 0]},
					then: {$divide: ["$60_4_1_pass", "$60_4_1_total"]}, else: 0}},
		"60_4_1_run_middle":
					{$cond: { if: {$gt: ["$60_4_1_total", 0]},
					then: {$divide: ["$60_4_1_run_middle", "$60_4_1_total"]}, else: 0}},
		"60_4_1_run_outside":
					{$cond: { if: {$gt: ["$60_4_1_total", 0]},
					then: {$divide: ["$60_4_1_run_outside", "$60_4_1_total"]}, else: 0}},
		"60_4_1_punt":
					{$cond: { if: {$gt: ["$60_4_1_total", 0]},
					then: {$divide: ["$60_4_1_punt", "$60_4_1_total"]}, else: 0}},
		"60_4_1_field_goal":
					{$cond: { if: {$gt: ["$60_4_1_total", 0]},
					then: {$divide: ["$60_4_1_field_goal", "$60_4_1_total"]}, else: 0}},
		"80_1_0_pass":
					{$cond: { if: {$gt: ["$80_1_0_total", 0]},
					then: {$divide: ["$80_1_0_pass", "$80_1_0_total"]}, else: 0}},
		"80_1_0_run_middle":
					{$cond: { if: {$gt: ["$80_1_0_total", 0]},
					then: {$divide: ["$80_1_0_run_middle", "$80_1_0_total"]}, else: 0}},
		"80_1_0_run_outside":
					{$cond: { if: {$gt: ["$80_1_0_total", 0]},
					then: {$divide: ["$80_1_0_run_outside", "$80_1_0_total"]}, else: 0}},
		"80_1_0_punt":
					{$cond: { if: {$gt: ["$80_1_0_total", 0]},
					then: {$divide: ["$80_1_0_punt", "$80_1_0_total"]}, else: 0}},
		"80_1_0_field_goal":
					{$cond: { if: {$gt: ["$80_1_0_total", 0]},
					then: {$divide: ["$80_1_0_field_goal", "$80_1_0_total"]}, else: 0}},
		"80_1_1_pass":
					{$cond: { if: {$gt: ["$80_1_1_total", 0]},
					then: {$divide: ["$80_1_1_pass", "$80_1_1_total"]}, else: 0}},
		"80_1_1_run_middle":
					{$cond: { if: {$gt: ["$80_1_1_total", 0]},
					then: {$divide: ["$80_1_1_run_middle", "$80_1_1_total"]}, else: 0}},
		"80_1_1_run_outside":
					{$cond: { if: {$gt: ["$80_1_1_total", 0]},
					then: {$divide: ["$80_1_1_run_outside", "$80_1_1_total"]}, else: 0}},
		"80_1_1_punt":
					{$cond: { if: {$gt: ["$80_1_1_total", 0]},
					then: {$divide: ["$80_1_1_punt", "$80_1_1_total"]}, else: 0}},
		"80_1_1_field_goal":
					{$cond: { if: {$gt: ["$80_1_1_total", 0]},
					then: {$divide: ["$80_1_1_field_goal", "$80_1_1_total"]}, else: 0}},
		"80_2_0_pass":
					{$cond: { if: {$gt: ["$80_2_0_total", 0]},
					then: {$divide: ["$80_2_0_pass", "$80_2_0_total"]}, else: 0}},
		"80_2_0_run_middle":
					{$cond: { if: {$gt: ["$80_2_0_total", 0]},
					then: {$divide: ["$80_2_0_run_middle", "$80_2_0_total"]}, else: 0}},
		"80_2_0_run_outside":
					{$cond: { if: {$gt: ["$80_2_0_total", 0]},
					then: {$divide: ["$80_2_0_run_outside", "$80_2_0_total"]}, else: 0}},
		"80_2_0_punt":
					{$cond: { if: {$gt: ["$80_2_0_total", 0]},
					then: {$divide: ["$80_2_0_punt", "$80_2_0_total"]}, else: 0}},
		"80_2_0_field_goal":
					{$cond: { if: {$gt: ["$80_2_0_total", 0]},
					then: {$divide: ["$80_2_0_field_goal", "$80_2_0_total"]}, else: 0}},
		"80_2_1_pass":
					{$cond: { if: {$gt: ["$80_2_1_total", 0]},
					then: {$divide: ["$80_2_1_pass", "$80_2_1_total"]}, else: 0}},
		"80_2_1_run_middle":
					{$cond: { if: {$gt: ["$80_2_1_total", 0]},
					then: {$divide: ["$80_2_1_run_middle", "$80_2_1_total"]}, else: 0}},
		"80_2_1_run_outside":
					{$cond: { if: {$gt: ["$80_2_1_total", 0]},
					then: {$divide: ["$80_2_1_run_outside", "$80_2_1_total"]}, else: 0}},
		"80_2_1_punt":
					{$cond: { if: {$gt: ["$80_2_1_total", 0]},
					then: {$divide: ["$80_2_1_punt", "$80_2_1_total"]}, else: 0}},
		"80_2_1_field_goal":
					{$cond: { if: {$gt: ["$80_2_1_total", 0]},
					then: {$divide: ["$80_2_1_field_goal", "$80_2_1_total"]}, else: 0}},
		"80_3_0_pass":
					{$cond: { if: {$gt: ["$80_3_0_total", 0]},
					then: {$divide: ["$80_3_0_pass", "$80_3_0_total"]}, else: 0}},
		"80_3_0_run_middle":
					{$cond: { if: {$gt: ["$80_3_0_total", 0]},
					then: {$divide: ["$80_3_0_run_middle", "$80_3_0_total"]}, else: 0}},
		"80_3_0_run_outside":
					{$cond: { if: {$gt: ["$80_3_0_total", 0]},
					then: {$divide: ["$80_3_0_run_outside", "$80_3_0_total"]}, else: 0}},
		"80_3_0_punt":
					{$cond: { if: {$gt: ["$80_3_0_total", 0]},
					then: {$divide: ["$80_3_0_punt", "$80_3_0_total"]}, else: 0}},
		"80_3_0_field_goal":
					{$cond: { if: {$gt: ["$80_3_0_total", 0]},
					then: {$divide: ["$80_3_0_field_goal", "$80_3_0_total"]}, else: 0}},
		"80_3_1_pass":
					{$cond: { if: {$gt: ["$80_3_1_total", 0]},
					then: {$divide: ["$80_3_1_pass", "$80_3_1_total"]}, else: 0}},
		"80_3_1_run_middle":
					{$cond: { if: {$gt: ["$80_3_1_total", 0]},
					then: {$divide: ["$80_3_1_run_middle", "$80_3_1_total"]}, else: 0}},
		"80_3_1_run_outside":
					{$cond: { if: {$gt: ["$80_3_1_total", 0]},
					then: {$divide: ["$80_3_1_run_outside", "$80_3_1_total"]}, else: 0}},
		"80_3_1_punt":
					{$cond: { if: {$gt: ["$80_3_1_total", 0]},
					then: {$divide: ["$80_3_1_punt", "$80_3_1_total"]}, else: 0}},
		"80_3_1_field_goal":
					{$cond: { if: {$gt: ["$80_3_1_total", 0]},
					then: {$divide: ["$80_3_1_field_goal", "$80_3_1_total"]}, else: 0}},
		"80_4_0_pass":
					{$cond: { if: {$gt: ["$80_4_0_total", 0]},
					then: {$divide: ["$80_4_0_pass", "$80_4_0_total"]}, else: 0}},
		"80_4_0_run_middle":
					{$cond: { if: {$gt: ["$80_4_0_total", 0]},
					then: {$divide: ["$80_4_0_run_middle", "$80_4_0_total"]}, else: 0}},
		"80_4_0_run_outside":
					{$cond: { if: {$gt: ["$80_4_0_total", 0]},
					then: {$divide: ["$80_4_0_run_outside", "$80_4_0_total"]}, else: 0}},
		"80_4_0_punt":
					{$cond: { if: {$gt: ["$80_4_0_total", 0]},
					then: {$divide: ["$80_4_0_punt", "$80_4_0_total"]}, else: 0}},
		"80_4_0_field_goal":
					{$cond: { if: {$gt: ["$80_4_0_total", 0]},
					then: {$divide: ["$80_4_0_field_goal", "$80_4_0_total"]}, else: 0}},
		"80_4_1_pass":
					{$cond: { if: {$gt: ["$80_4_1_total", 0]},
					then: {$divide: ["$80_4_1_pass", "$80_4_1_total"]}, else: 0}},
		"80_4_1_run_middle":
					{$cond: { if: {$gt: ["$80_4_1_total", 0]},
					then: {$divide: ["$80_4_1_run_middle", "$80_4_1_total"]}, else: 0}},
		"80_4_1_run_outside":
					{$cond: { if: {$gt: ["$80_4_1_total", 0]},
					then: {$divide: ["$80_4_1_run_outside", "$80_4_1_total"]}, else: 0}},
		"80_4_1_punt":
					{$cond: { if: {$gt: ["$80_4_1_total", 0]},
					then: {$divide: ["$80_4_1_punt", "$80_4_1_total"]}, else: 0}},
		"80_4_1_field_goal":
					{$cond: { if: {$gt: ["$80_4_1_total", 0]},
					then: {$divide: ["$80_4_1_field_goal", "$80_4_1_total"]}, else: 0}},
		"100_1_0_pass":
					{$cond: { if: {$gt: ["$100_1_0_total", 0]},
					then: {$divide: ["$100_1_0_pass", "$100_1_0_total"]}, else: 0}},
		"100_1_0_run_middle":
					{$cond: { if: {$gt: ["$100_1_0_total", 0]},
					then: {$divide: ["$100_1_0_run_middle", "$100_1_0_total"]}, else: 0}},
		"100_1_0_run_outside":
					{$cond: { if: {$gt: ["$100_1_0_total", 0]},
					then: {$divide: ["$100_1_0_run_outside", "$100_1_0_total"]}, else: 0}},
		"100_1_0_punt":
					{$cond: { if: {$gt: ["$100_1_0_total", 0]},
					then: {$divide: ["$100_1_0_punt", "$100_1_0_total"]}, else: 0}},
		"100_1_0_field_goal":
					{$cond: { if: {$gt: ["$100_1_0_total", 0]},
					then: {$divide: ["$100_1_0_field_goal", "$100_1_0_total"]}, else: 0}},
		"100_1_1_pass":
					{$cond: { if: {$gt: ["$100_1_1_total", 0]},
					then: {$divide: ["$100_1_1_pass", "$100_1_1_total"]}, else: 0}},
		"100_1_1_run_middle":
					{$cond: { if: {$gt: ["$100_1_1_total", 0]},
					then: {$divide: ["$100_1_1_run_middle", "$100_1_1_total"]}, else: 0}},
		"100_1_1_run_outside":
					{$cond: { if: {$gt: ["$100_1_1_total", 0]},
					then: {$divide: ["$100_1_1_run_outside", "$100_1_1_total"]}, else: 0}},
		"100_1_1_punt":
					{$cond: { if: {$gt: ["$100_1_1_total", 0]},
					then: {$divide: ["$100_1_1_punt", "$100_1_1_total"]}, else: 0}},
		"100_1_1_field_goal":
					{$cond: { if: {$gt: ["$100_1_1_total", 0]},
					then: {$divide: ["$100_1_1_field_goal", "$100_1_1_total"]}, else: 0}},
		"100_2_0_pass":
					{$cond: { if: {$gt: ["$100_2_0_total", 0]},
					then: {$divide: ["$100_2_0_pass", "$100_2_0_total"]}, else: 0}},
		"100_2_0_run_middle":
					{$cond: { if: {$gt: ["$100_2_0_total", 0]},
					then: {$divide: ["$100_2_0_run_middle", "$100_2_0_total"]}, else: 0}},
		"100_2_0_run_outside":
					{$cond: { if: {$gt: ["$100_2_0_total", 0]},
					then: {$divide: ["$100_2_0_run_outside", "$100_2_0_total"]}, else: 0}},
		"100_2_0_punt":
					{$cond: { if: {$gt: ["$100_2_0_total", 0]},
					then: {$divide: ["$100_2_0_punt", "$100_2_0_total"]}, else: 0}},
		"100_2_0_field_goal":
					{$cond: { if: {$gt: ["$100_2_0_total", 0]},
					then: {$divide: ["$100_2_0_field_goal", "$100_2_0_total"]}, else: 0}},
		"100_2_1_pass":
					{$cond: { if: {$gt: ["$100_2_1_total", 0]},
					then: {$divide: ["$100_2_1_pass", "$100_2_1_total"]}, else: 0}},
		"100_2_1_run_middle":
					{$cond: { if: {$gt: ["$100_2_1_total", 0]},
					then: {$divide: ["$100_2_1_run_middle", "$100_2_1_total"]}, else: 0}},
		"100_2_1_run_outside":
					{$cond: { if: {$gt: ["$100_2_1_total", 0]},
					then: {$divide: ["$100_2_1_run_outside", "$100_2_1_total"]}, else: 0}},
		"100_2_1_punt":
					{$cond: { if: {$gt: ["$100_2_1_total", 0]},
					then: {$divide: ["$100_2_1_punt", "$100_2_1_total"]}, else: 0}},
		"100_2_1_field_goal":
					{$cond: { if: {$gt: ["$100_2_1_total", 0]},
					then: {$divide: ["$100_2_1_field_goal", "$100_2_1_total"]}, else: 0}},
		"100_3_0_pass":
					{$cond: { if: {$gt: ["$100_3_0_total", 0]},
					then: {$divide: ["$100_3_0_pass", "$100_3_0_total"]}, else: 0}},
		"100_3_0_run_middle":
					{$cond: { if: {$gt: ["$100_3_0_total", 0]},
					then: {$divide: ["$100_3_0_run_middle", "$100_3_0_total"]}, else: 0}},
		"100_3_0_run_outside":
					{$cond: { if: {$gt: ["$100_3_0_total", 0]},
					then: {$divide: ["$100_3_0_run_outside", "$100_3_0_total"]}, else: 0}},
		"100_3_0_punt":
					{$cond: { if: {$gt: ["$100_3_0_total", 0]},
					then: {$divide: ["$100_3_0_punt", "$100_3_0_total"]}, else: 0}},
		"100_3_0_field_goal":
					{$cond: { if: {$gt: ["$100_3_0_total", 0]},
					then: {$divide: ["$100_3_0_field_goal", "$100_3_0_total"]}, else: 0}},
		"100_3_1_pass":
					{$cond: { if: {$gt: ["$100_3_1_total", 0]},
					then: {$divide: ["$100_3_1_pass", "$100_3_1_total"]}, else: 0}},
		"100_3_1_run_middle":
					{$cond: { if: {$gt: ["$100_3_1_total", 0]},
					then: {$divide: ["$100_3_1_run_middle", "$100_3_1_total"]}, else: 0}},
		"100_3_1_run_outside":
					{$cond: { if: {$gt: ["$100_3_1_total", 0]},
					then: {$divide: ["$100_3_1_run_outside", "$100_3_1_total"]}, else: 0}},
		"100_3_1_punt":
					{$cond: { if: {$gt: ["$100_3_1_total", 0]},
					then: {$divide: ["$100_3_1_punt", "$100_3_1_total"]}, else: 0}},
		"100_3_1_field_goal":
					{$cond: { if: {$gt: ["$100_3_1_total", 0]},
					then: {$divide: ["$100_3_1_field_goal", "$100_3_1_total"]}, else: 0}},
		"100_4_0_pass":
					{$cond: { if: {$gt: ["$100_4_0_total", 0]},
					then: {$divide: ["$100_4_0_pass", "$100_4_0_total"]}, else: 0}},
		"100_4_0_run_middle":
					{$cond: { if: {$gt: ["$100_4_0_total", 0]},
					then: {$divide: ["$100_4_0_run_middle", "$100_4_0_total"]}, else: 0}},
		"100_4_0_run_outside":
					{$cond: { if: {$gt: ["$100_4_0_total", 0]},
					then: {$divide: ["$100_4_0_run_outside", "$100_4_0_total"]}, else: 0}},
		"100_4_0_punt":
					{$cond: { if: {$gt: ["$100_4_0_total", 0]},
					then: {$divide: ["$100_4_0_punt", "$100_4_0_total"]}, else: 0}},
		"100_4_0_field_goal":
					{$cond: { if: {$gt: ["$100_4_0_total", 0]},
					then: {$divide: ["$100_4_0_field_goal", "$100_4_0_total"]}, else: 0}},
		"100_4_1_pass":
					{$cond: { if: {$gt: ["$100_4_1_total", 0]},
					then: {$divide: ["$100_4_1_pass", "$100_4_1_total"]}, else: 0}},
		"100_4_1_run_middle":
					{$cond: { if: {$gt: ["$100_4_1_total", 0]},
					then: {$divide: ["$100_4_1_run_middle", "$100_4_1_total"]}, else: 0}},
		"100_4_1_run_outside":
					{$cond: { if: {$gt: ["$100_4_1_total", 0]},
					then: {$divide: ["$100_4_1_run_outside", "$100_4_1_total"]}, else: 0}},
		"100_4_1_punt":
					{$cond: { if: {$gt: ["$100_4_1_total", 0]},
					then: {$divide: ["$100_4_1_punt", "$100_4_1_total"]}, else: 0}},
		"100_4_1_field_goal":
					{$cond: { if: {$gt: ["$100_4_1_total", 0]},
					then: {$divide: ["$100_4_1_field_goal", "$100_4_1_total"]}, else: 0}},
	},
	},
	{ "$group" : {
		"_id" : "$_id",
		"20_1_0_pass": {$sum: "$20_1_0_pass"},
		"20_1_0_run_middle": {$sum: "$20_1_0_run_middle"},
		"20_1_0_run_outside": {$sum: "$20_1_0_run_outside"},
		"20_1_0_punt": {$sum: "$20_1_0_punt"},
		"20_1_0_field_goal": {$sum: "$20_1_0_field_goal"},
		"20_1_1_pass": {$sum: "$20_1_1_pass"},
		"20_1_1_run_middle": {$sum: "$20_1_1_run_middle"},
		"20_1_1_run_outside": {$sum: "$20_1_1_run_outside"},
		"20_1_1_punt": {$sum: "$20_1_1_punt"},
		"20_1_1_field_goal": {$sum: "$20_1_1_field_goal"},
		"20_2_0_pass": {$sum: "$20_2_0_pass"},
		"20_2_0_run_middle": {$sum: "$20_2_0_run_middle"},
		"20_2_0_run_outside": {$sum: "$20_2_0_run_outside"},
		"20_2_0_punt": {$sum: "$20_2_0_punt"},
		"20_2_0_field_goal": {$sum: "$20_2_0_field_goal"},
		"20_2_1_pass": {$sum: "$20_2_1_pass"},
		"20_2_1_run_middle": {$sum: "$20_2_1_run_middle"},
		"20_2_1_run_outside": {$sum: "$20_2_1_run_outside"},
		"20_2_1_punt": {$sum: "$20_2_1_punt"},
		"20_2_1_field_goal": {$sum: "$20_2_1_field_goal"},
		"20_3_0_pass": {$sum: "$20_3_0_pass"},
		"20_3_0_run_middle": {$sum: "$20_3_0_run_middle"},
		"20_3_0_run_outside": {$sum: "$20_3_0_run_outside"},
		"20_3_0_punt": {$sum: "$20_3_0_punt"},
		"20_3_0_field_goal": {$sum: "$20_3_0_field_goal"},
		"20_3_1_pass": {$sum: "$20_3_1_pass"},
		"20_3_1_run_middle": {$sum: "$20_3_1_run_middle"},
		"20_3_1_run_outside": {$sum: "$20_3_1_run_outside"},
		"20_3_1_punt": {$sum: "$20_3_1_punt"},
		"20_3_1_field_goal": {$sum: "$20_3_1_field_goal"},
		"20_4_0_pass": {$sum: "$20_4_0_pass"},
		"20_4_0_run_middle": {$sum: "$20_4_0_run_middle"},
		"20_4_0_run_outside": {$sum: "$20_4_0_run_outside"},
		"20_4_0_punt": {$sum: "$20_4_0_punt"},
		"20_4_0_field_goal": {$sum: "$20_4_0_field_goal"},
		"20_4_1_pass": {$sum: "$20_4_1_pass"},
		"20_4_1_run_middle": {$sum: "$20_4_1_run_middle"},
		"20_4_1_run_outside": {$sum: "$20_4_1_run_outside"},
		"20_4_1_punt": {$sum: "$20_4_1_punt"},
		"20_4_1_field_goal": {$sum: "$20_4_1_field_goal"},
		"40_1_0_pass": {$sum: "$40_1_0_pass"},
		"40_1_0_run_middle": {$sum: "$40_1_0_run_middle"},
		"40_1_0_run_outside": {$sum: "$40_1_0_run_outside"},
		"40_1_0_punt": {$sum: "$40_1_0_punt"},
		"40_1_0_field_goal": {$sum: "$40_1_0_field_goal"},
		"40_1_1_pass": {$sum: "$40_1_1_pass"},
		"40_1_1_run_middle": {$sum: "$40_1_1_run_middle"},
		"40_1_1_run_outside": {$sum: "$40_1_1_run_outside"},
		"40_1_1_punt": {$sum: "$40_1_1_punt"},
		"40_1_1_field_goal": {$sum: "$40_1_1_field_goal"},
		"40_2_0_pass": {$sum: "$40_2_0_pass"},
		"40_2_0_run_middle": {$sum: "$40_2_0_run_middle"},
		"40_2_0_run_outside": {$sum: "$40_2_0_run_outside"},
		"40_2_0_punt": {$sum: "$40_2_0_punt"},
		"40_2_0_field_goal": {$sum: "$40_2_0_field_goal"},
		"40_2_1_pass": {$sum: "$40_2_1_pass"},
		"40_2_1_run_middle": {$sum: "$40_2_1_run_middle"},
		"40_2_1_run_outside": {$sum: "$40_2_1_run_outside"},
		"40_2_1_punt": {$sum: "$40_2_1_punt"},
		"40_2_1_field_goal": {$sum: "$40_2_1_field_goal"},
		"40_3_0_pass": {$sum: "$40_3_0_pass"},
		"40_3_0_run_middle": {$sum: "$40_3_0_run_middle"},
		"40_3_0_run_outside": {$sum: "$40_3_0_run_outside"},
		"40_3_0_punt": {$sum: "$40_3_0_punt"},
		"40_3_0_field_goal": {$sum: "$40_3_0_field_goal"},
		"40_3_1_pass": {$sum: "$40_3_1_pass"},
		"40_3_1_run_middle": {$sum: "$40_3_1_run_middle"},
		"40_3_1_run_outside": {$sum: "$40_3_1_run_outside"},
		"40_3_1_punt": {$sum: "$40_3_1_punt"},
		"40_3_1_field_goal": {$sum: "$40_3_1_field_goal"},
		"40_4_0_pass": {$sum: "$40_4_0_pass"},
		"40_4_0_run_middle": {$sum: "$40_4_0_run_middle"},
		"40_4_0_run_outside": {$sum: "$40_4_0_run_outside"},
		"40_4_0_punt": {$sum: "$40_4_0_punt"},
		"40_4_0_field_goal": {$sum: "$40_4_0_field_goal"},
		"40_4_1_pass": {$sum: "$40_4_1_pass"},
		"40_4_1_run_middle": {$sum: "$40_4_1_run_middle"},
		"40_4_1_run_outside": {$sum: "$40_4_1_run_outside"},
		"40_4_1_punt": {$sum: "$40_4_1_punt"},
		"40_4_1_field_goal": {$sum: "$40_4_1_field_goal"},
		"60_1_0_pass": {$sum: "$60_1_0_pass"},
		"60_1_0_run_middle": {$sum: "$60_1_0_run_middle"},
		"60_1_0_run_outside": {$sum: "$60_1_0_run_outside"},
		"60_1_0_punt": {$sum: "$60_1_0_punt"},
		"60_1_0_field_goal": {$sum: "$60_1_0_field_goal"},
		"60_1_1_pass": {$sum: "$60_1_1_pass"},
		"60_1_1_run_middle": {$sum: "$60_1_1_run_middle"},
		"60_1_1_run_outside": {$sum: "$60_1_1_run_outside"},
		"60_1_1_punt": {$sum: "$60_1_1_punt"},
		"60_1_1_field_goal": {$sum: "$60_1_1_field_goal"},
		"60_2_0_pass": {$sum: "$60_2_0_pass"},
		"60_2_0_run_middle": {$sum: "$60_2_0_run_middle"},
		"60_2_0_run_outside": {$sum: "$60_2_0_run_outside"},
		"60_2_0_punt": {$sum: "$60_2_0_punt"},
		"60_2_0_field_goal": {$sum: "$60_2_0_field_goal"},
		"60_2_1_pass": {$sum: "$60_2_1_pass"},
		"60_2_1_run_middle": {$sum: "$60_2_1_run_middle"},
		"60_2_1_run_outside": {$sum: "$60_2_1_run_outside"},
		"60_2_1_punt": {$sum: "$60_2_1_punt"},
		"60_2_1_field_goal": {$sum: "$60_2_1_field_goal"},
		"60_3_0_pass": {$sum: "$60_3_0_pass"},
		"60_3_0_run_middle": {$sum: "$60_3_0_run_middle"},
		"60_3_0_run_outside": {$sum: "$60_3_0_run_outside"},
		"60_3_0_punt": {$sum: "$60_3_0_punt"},
		"60_3_0_field_goal": {$sum: "$60_3_0_field_goal"},
		"60_3_1_pass": {$sum: "$60_3_1_pass"},
		"60_3_1_run_middle": {$sum: "$60_3_1_run_middle"},
		"60_3_1_run_outside": {$sum: "$60_3_1_run_outside"},
		"60_3_1_punt": {$sum: "$60_3_1_punt"},
		"60_3_1_field_goal": {$sum: "$60_3_1_field_goal"},
		"60_4_0_pass": {$sum: "$60_4_0_pass"},
		"60_4_0_run_middle": {$sum: "$60_4_0_run_middle"},
		"60_4_0_run_outside": {$sum: "$60_4_0_run_outside"},
		"60_4_0_punt": {$sum: "$60_4_0_punt"},
		"60_4_0_field_goal": {$sum: "$60_4_0_field_goal"},
		"60_4_1_pass": {$sum: "$60_4_1_pass"},
		"60_4_1_run_middle": {$sum: "$60_4_1_run_middle"},
		"60_4_1_run_outside": {$sum: "$60_4_1_run_outside"},
		"60_4_1_punt": {$sum: "$60_4_1_punt"},
		"60_4_1_field_goal": {$sum: "$60_4_1_field_goal"},
		"80_1_0_pass": {$sum: "$80_1_0_pass"},
		"80_1_0_run_middle": {$sum: "$80_1_0_run_middle"},
		"80_1_0_run_outside": {$sum: "$80_1_0_run_outside"},
		"80_1_0_punt": {$sum: "$80_1_0_punt"},
		"80_1_0_field_goal": {$sum: "$80_1_0_field_goal"},
		"80_1_1_pass": {$sum: "$80_1_1_pass"},
		"80_1_1_run_middle": {$sum: "$80_1_1_run_middle"},
		"80_1_1_run_outside": {$sum: "$80_1_1_run_outside"},
		"80_1_1_punt": {$sum: "$80_1_1_punt"},
		"80_1_1_field_goal": {$sum: "$80_1_1_field_goal"},
		"80_2_0_pass": {$sum: "$80_2_0_pass"},
		"80_2_0_run_middle": {$sum: "$80_2_0_run_middle"},
		"80_2_0_run_outside": {$sum: "$80_2_0_run_outside"},
		"80_2_0_punt": {$sum: "$80_2_0_punt"},
		"80_2_0_field_goal": {$sum: "$80_2_0_field_goal"},
		"80_2_1_pass": {$sum: "$80_2_1_pass"},
		"80_2_1_run_middle": {$sum: "$80_2_1_run_middle"},
		"80_2_1_run_outside": {$sum: "$80_2_1_run_outside"},
		"80_2_1_punt": {$sum: "$80_2_1_punt"},
		"80_2_1_field_goal": {$sum: "$80_2_1_field_goal"},
		"80_3_0_pass": {$sum: "$80_3_0_pass"},
		"80_3_0_run_middle": {$sum: "$80_3_0_run_middle"},
		"80_3_0_run_outside": {$sum: "$80_3_0_run_outside"},
		"80_3_0_punt": {$sum: "$80_3_0_punt"},
		"80_3_0_field_goal": {$sum: "$80_3_0_field_goal"},
		"80_3_1_pass": {$sum: "$80_3_1_pass"},
		"80_3_1_run_middle": {$sum: "$80_3_1_run_middle"},
		"80_3_1_run_outside": {$sum: "$80_3_1_run_outside"},
		"80_3_1_punt": {$sum: "$80_3_1_punt"},
		"80_3_1_field_goal": {$sum: "$80_3_1_field_goal"},
		"80_4_0_pass": {$sum: "$80_4_0_pass"},
		"80_4_0_run_middle": {$sum: "$80_4_0_run_middle"},
		"80_4_0_run_outside": {$sum: "$80_4_0_run_outside"},
		"80_4_0_punt": {$sum: "$80_4_0_punt"},
		"80_4_0_field_goal": {$sum: "$80_4_0_field_goal"},
		"80_4_1_pass": {$sum: "$80_4_1_pass"},
		"80_4_1_run_middle": {$sum: "$80_4_1_run_middle"},
		"80_4_1_run_outside": {$sum: "$80_4_1_run_outside"},
		"80_4_1_punt": {$sum: "$80_4_1_punt"},
		"80_4_1_field_goal": {$sum: "$80_4_1_field_goal"},
		"100_1_0_pass": {$sum: "$100_1_0_pass"},
		"100_1_0_run_middle": {$sum: "$100_1_0_run_middle"},
		"100_1_0_run_outside": {$sum: "$100_1_0_run_outside"},
		"100_1_0_punt": {$sum: "$100_1_0_punt"},
		"100_1_0_field_goal": {$sum: "$100_1_0_field_goal"},
		"100_1_1_pass": {$sum: "$100_1_1_pass"},
		"100_1_1_run_middle": {$sum: "$100_1_1_run_middle"},
		"100_1_1_run_outside": {$sum: "$100_1_1_run_outside"},
		"100_1_1_punt": {$sum: "$100_1_1_punt"},
		"100_1_1_field_goal": {$sum: "$100_1_1_field_goal"},
		"100_2_0_pass": {$sum: "$100_2_0_pass"},
		"100_2_0_run_middle": {$sum: "$100_2_0_run_middle"},
		"100_2_0_run_outside": {$sum: "$100_2_0_run_outside"},
		"100_2_0_punt": {$sum: "$100_2_0_punt"},
		"100_2_0_field_goal": {$sum: "$100_2_0_field_goal"},
		"100_2_1_pass": {$sum: "$100_2_1_pass"},
		"100_2_1_run_middle": {$sum: "$100_2_1_run_middle"},
		"100_2_1_run_outside": {$sum: "$100_2_1_run_outside"},
		"100_2_1_punt": {$sum: "$100_2_1_punt"},
		"100_2_1_field_goal": {$sum: "$100_2_1_field_goal"},
		"100_3_0_pass": {$sum: "$100_3_0_pass"},
		"100_3_0_run_middle": {$sum: "$100_3_0_run_middle"},
		"100_3_0_run_outside": {$sum: "$100_3_0_run_outside"},
		"100_3_0_punt": {$sum: "$100_3_0_punt"},
		"100_3_0_field_goal": {$sum: "$100_3_0_field_goal"},
		"100_3_1_pass": {$sum: "$100_3_1_pass"},
		"100_3_1_run_middle": {$sum: "$100_3_1_run_middle"},
		"100_3_1_run_outside": {$sum: "$100_3_1_run_outside"},
		"100_3_1_punt": {$sum: "$100_3_1_punt"},
		"100_3_1_field_goal": {$sum: "$100_3_1_field_goal"},
		"100_4_0_pass": {$sum: "$100_4_0_pass"},
		"100_4_0_run_middle": {$sum: "$100_4_0_run_middle"},
		"100_4_0_run_outside": {$sum: "$100_4_0_run_outside"},
		"100_4_0_punt": {$sum: "$100_4_0_punt"},
		"100_4_0_field_goal": {$sum: "$100_4_0_field_goal"},
		"100_4_1_pass": {$sum: "$100_4_1_pass"},
		"100_4_1_run_middle": {$sum: "$100_4_1_run_middle"},
		"100_4_1_run_outside": {$sum: "$100_4_1_run_outside"},
		"100_4_1_punt": {$sum: "$100_4_1_punt"},
		"100_4_1_field_goal": {$sum: "$100_4_1_field_goal"},
	},
	},
	{ $out: "teamSeasonVectors" }
])