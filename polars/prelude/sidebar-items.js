window.SIDEBAR_ITEMS = {"constant":[["IDX_DTYPE",""],["NULL",""],["NULL_DTYPE",""]],"enum":[["AggExpr",""],["AnyValue",""],["ArrowDataType","The set of supported logical types in this crate."],["ArrowTimeUnit","The time units defined in Arrow."],["AsofStrategy",""],["CategoricalOrdering",""],["ClosedWindow",""],["CsvEncoding",""],["DataType",""],["Excluded",""],["Expr","Queries consists of multiple expressions."],["FillNullStrategy",""],["FunctionExpr",""],["GroupByMethod",""],["GroupsIndicator",""],["GroupsProxy",""],["InterpolationMethod",""],["IpcCompression","Compression codec"],["JoinType",""],["JsonFormat",""],["LiteralValue",""],["LogicalPlan",""],["NullValues",""],["Operator",""],["ParallelStrategy",""],["ParquetCompression",""],["PolarsError",""],["QuantileInterpolOptions",""],["RankMethod",""],["RevMapping",""],["RevMappingBuilder",""],["SearchSortedSide",""],["StartBy",""],["TakeIdx","One of the three arguments allowed in unchecked_take"],["TakeRandBranch2",""],["TakeRandBranch3",""],["TimeUnit",""],["UniqueKeepStrategy",""]],"fn":[["all","Selects all columns"],["all_exprs","Evaluate all the expressions with a bitwise and"],["any_exprs","Evaluate all the expressions with a bitwise or"],["apply_binary",""],["apply_multiple","Apply a function/closure over the groups of multiple columns. This should only be used in a groupby aggregation."],["arange","Create list entries that are range arrays"],["arg_where","Get the indices where `condition` evaluates `true`."],["argsort_by","Find the indexes that would sort these series in order of appearance. That means that the first `Series` will be used to determine the ordering until duplicates are found. Once duplicates are found, the next `Series` will be used and so on."],["as_struct","Take several expressions and collect them into a [`StructChunked`]."],["avg","Find the mean of all the values in this Expression."],["binary_expr",""],["cast","Cast expression."],["coalesce","Folds the expressions from left to right keeping the first no null values."],["col","Create a Column Expression based on a column name."],["collect_all","Collect all `LazyFrame` computations."],["cols","Select multiple columns by name"],["concat","Concat multiple"],["concat_lst","Concat lists entries."],["concat_str","Horizontally concat string columns in linear time"],["count","Count expression"],["cov","Compute the covariance between two columns."],["cumfold_exprs","Accumulate over multiple columns horizontally / row wise."],["cumreduce_exprs","Accumulate over multiple columns horizontally / row wise."],["date_range_vec",""],["datetime",""],["datetime_to_timestamp_ms",""],["datetime_to_timestamp_ns",""],["datetime_to_timestamp_us",""],["diag_concat_lf","Concat [LazyFrame]s diagonally. Calls [concat] internally."],["dtype_col","Select multiple columns by dtype."],["dtype_cols","Select multiple columns by dtype."],["duration",""],["first","First column in DataFrame"],["floor_div_series",""],["fmt_groupby_column",""],["fold_exprs","Accumulate over multiple columns horizontally / row wise."],["format_str","Format the results of an array of expressions using a format string"],["groupby_values","Different from `groupby_windows`, where define window buckets and search which values fit that pre-defined bucket, this function defines every window based on the: - timestamp (lower bound) - timestamp + period (upper bound) where timestamps are the individual values in the array `time`"],["groupby_windows","Based on the given `Window`, which has an"],["in_nanoseconds_window",""],["indexes_to_usizes",""],["interpolate",""],["is_not_null","IsNotNull expression."],["is_null","IsNull expression"],["last","Last column in DataFrame"],["lit","Create a Literal Expression from `L`"],["map_binary","Apply a closure on the two columns that are evaluated from `Expr` a and `Expr` b."],["map_list_multiple","Apply a function/closure over multiple columns once the logical plan get executed."],["map_multiple","Apply a function/closure over multiple columns once the logical plan get executed."],["max","Find the maximum of all the values in this Expression."],["max_exprs","Get the the maximum value per row"],["mean","Find the mean of all the values in this Expression."],["median","Find the median of all the values in this Expression."],["merge_dtypes",""],["min","Find the minimum of all the values in this Expression."],["min_exprs",""],["not","Not expression."],["pearson_corr","Compute the pearson correlation between two columns."],["quantile","Find a specific quantile of all the values in this Expression."],["range","Create a range literal."],["reduce_exprs",""],["repeat","Repeat a literal `value` `n` times."],["resolve_homedir",""],["search_sorted",""],["spearman_rank_corr","Compute the spearman rank correlation between two columns. Missing data will be excluded from the computation."],["sum","Sum all the values in this Expression."],["sum_exprs","Get the the sum of the values per row"],["ternary_expr",""],["unix_time",""],["when","Start a when-then-otherwise expression"]],"macro":[["df",""]],"mod":[["aggregations",""],["arrow_ndjson","APIs to read from and write to NDJSON"],["binary",""],["cat",""],["chunkedarray","Traits and utilities for temporal data."],["cloud",""],["datatypes","Data types supported by Polars."],["default_arrays",""],["expr",""],["full",""],["json","Convert data between the Arrow memory format and JSON line-delimited records."],["list",""],["nan_propagating_aggregate",""],["predicates",""],["read_impl",""],["series",""],["string",""],["utf8",""],["utils",""],["zip",""]],"struct":[["AggregationContext",""],["AnonymousScanOptions",""],["Arc","A thread-safe reference-counting pointer. ‘Arc’ stands for ‘Atomically Reference Counted’."],["ArrowField","Represents Arrow’s metadata of a “column”."],["ArrowSchema","An ordered sequence of [`Field`]s with associated [`Metadata`]."],["AsOfOptions",""],["BatchedParquetReader",""],["BinaryChunkedBuilder",""],["BinaryTakeRandom",""],["BinaryTakeRandomSingleChunk",""],["BinaryType",""],["BoolTakeRandom",""],["BoolTakeRandomSingleChunk",""],["BooleanChunkedBuilder",""],["BooleanType",""],["Bounds",""],["BoundsIter",""],["BrotliLevel",""],["CatIter",""],["CategoricalChunked",""],["CategoricalChunkedBuilder",""],["CategoricalNameSpace","Specialized expressions for Categorical dtypes."],["CategoricalType",""],["ChunkedArray","ChunkedArray"],["CsvReader","Create a new DataFrame by reading a csv file."],["CsvWriter","Write a DataFrame to csv."],["DataFrame","A contiguous growable collection of `Series` that have the same length."],["DateType",""],["DatetimeArgs",""],["DatetimeType",""],["Duration",""],["DurationArgs",""],["DurationType",""],["DynamicGroupOptions",""],["Field","Characterizes the name and the [`DataType`] of a column."],["Float32Type",""],["Float64Type",""],["GroupBy","Returned by a groupby operation on a DataFrame. This struct supports several aggregations."],["GroupsIdx","Indexes of the groups, the first index is stored separately. this make sorting fast."],["GroupsProxyIter",""],["GroupsProxyParIter",""],["GzipLevel",""],["Int16Type",""],["Int32Type",""],["Int64Type",""],["Int8Type",""],["IpcReader","Read Arrows IPC format into a DataFrame"],["IpcStreamReader","Read Arrows Stream IPC format into a DataFrame"],["IpcStreamWriter","Write a DataFrame to Arrow’s Streaming IPC format"],["IpcStreamWriterOption",""],["IpcWriter","Write a DataFrame to Arrow’s IPC format"],["IpcWriterOption",""],["IpcWriterOptions",""],["JoinBuilder",""],["JoinOptions",""],["JsonLineReader",""],["JsonReader",""],["JsonWriter",""],["LazyCsvReader",""],["LazyFrame","Lazy abstraction over an eager `DataFrame`. It really is an abstraction over a logical plan. The methods of this struct will incrementally modify a logical plan until output is requested (via collect)"],["LazyGroupBy","Utility struct for lazy groupby operation."],["LazyJsonLineReader",""],["ListBinaryChunkedBuilder",""],["ListBooleanChunkedBuilder",""],["ListNameSpace","Specialized expressions for [`Series`] of [`DataType::List`]."],["ListPrimitiveChunkedBuilder",""],["ListTakeRandom",""],["ListTakeRandomSingleChunk",""],["ListType",""],["ListUtf8ChunkedBuilder",""],["Logical","Maps a logical type to a a chunked array implementation of the physical type. This saves a lot of compiler bloat and allows us to reuse functionality."],["MeltArgs","Arguments for `[DataFrame::melt]` function"],["NoNull","Just a wrapper structure. Useful for certain impl specializations This is for instance use to implement `impl<T> FromIterator<T::Native> for NoNull<ChunkedArray<T>>` as `Option<T::Native>` was already implemented: `impl<T> FromIterator<Option<T::Native>> for ChunkedArray<T>`"],["Null","The literal Null"],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["NumTakeRandomSingleChunk",""],["ObjectTakeRandom",""],["ObjectTakeRandomSingleChunk",""],["ObjectType",""],["OptState","State of the allowed optimizations"],["OwnedObject",""],["ParquetReader","Read Apache parquet format into a DataFrame."],["ParquetWriteOptions",""],["ParquetWriter","Write a DataFrame to parquet format"],["PhysicalIoHelper","Wrapper struct that allow us to use a PhysicalExpr in polars-io."],["PrimitiveChunkedBuilder",""],["RankOptions",""],["RollingGroupOptions",""],["RollingOptions",""],["RollingOptionsFixedWindow",""],["RollingOptionsImpl",""],["ScanArgsAnonymous",""],["ScanArgsIpc",""],["ScanArgsParquet",""],["Schema",""],["Series","Series"],["SlicedGroups",""],["SortOptions",""],["SpecialEq","Wrapper type that has special equality properties depending on the inner type specialization"],["StrHashLocal",""],["StrpTimeOptions",""],["StructArray","A [`StructArray`] is a nested [`Array`] with an optional validity representing multiple [`Array`] with the same number of rows."],["StructChunked","This is logical type [`StructChunked`] that dispatches most logic to the `fields` implementations"],["TakeRandomBitmap",""],["TimeType",""],["UInt16Type",""],["UInt32Type",""],["UInt64Type",""],["UInt8Type",""],["Utf8ChunkedBuilder",""],["Utf8TakeRandom",""],["Utf8TakeRandomSingleChunk",""],["Utf8Type",""],["When","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThen","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThenThen","Intermediate state of chain when then exprs."],["Window","Represents a window in time"],["ZstdLevel","Represents a valid zstd compression level."]],"trait":[["AnonymousScan",""],["ArgAgg","Argmin/ Argmax"],["ArrowGetItem",""],["AsBinary",""],["AsList",""],["AsUtf8",""],["BinaryNameSpaceImpl",""],["BinaryUdfOutputField",""],["ChunkAgg","Aggregation operations"],["ChunkAggSeries","Aggregations that return Series of unit length. Those can be used in broadcasting operations."],["ChunkAnyValue",""],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray when the operation is cheaper than branching due to null checking"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray’s and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode","Explode/ flatten a List or Utf8 Series"],["ChunkFillNull","Replace None values with various strategies"],["ChunkFillNullValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkPeaks","Find local minima/ maxima"],["ChunkQuantile","Quantile and median aggregation"],["ChunkReverse","Reverse a ChunkedArray"],["ChunkRollApply","This differs from ChunkWindowCustom and ChunkWindow by not using a fold aggregator, but reusing a `Series` wrapper and calling `Series` aggregators. This likely is a bit slower than ChunkWindow"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery","Traverse and collect every nth element"],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["ChunkedBuilder",""],["ChunkedSet",""],["DataFrameJoinOps",""],["DataFrameOps",""],["DateMethods",""],["DatetimeMethods",""],["DurationMethods",""],["ExprEvalExtension",""],["FromData",""],["FromDataBinary",""],["FromDataUtf8",""],["FunctionOutputField",""],["GetAnyValue",""],["IndexOfSchema","This trait exists to be unify the API of polars Schema and arrows Schema"],["IndexToUsize",""],["InitHashMaps",""],["IntoGroupsProxy","Used to create the tuples for a groupby operation."],["IntoLazy",""],["IntoListNameSpace",""],["IntoSeries","Used to convert a [`ChunkedArray`], `&dyn SeriesTrait` and [`Series`] into a [`Series`]."],["IntoSeriesOps",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["IntoVec",""],["IsFirst","Mask the first unique values as `true`"],["IsFloat","Safety"],["IsIn","Check if element is member of list array"],["IsLast","Mask the last unique values as `true`"],["LhsNumOps",""],["ListBuilderTrait",""],["ListFromIter",""],["ListNameSpaceExtension",""],["ListNameSpaceImpl",""],["Literal",""],["LogicalType",""],["MutableBitmapExtension",""],["NamedFrom",""],["NamedFromOwned",""],["NewChunkedArray",""],["NumOpsDispatch",""],["NumOpsDispatchChecked",""],["NumericNative",""],["PartitionedAggregation",""],["PhysicalExpr","Take a DataFrame and evaluate the expressions. Implement this for Column, lt, eq, etc"],["PolarsArray",""],["PolarsDataType",""],["PolarsFloatType",""],["PolarsIntegerType",""],["PolarsIterator","A `PolarsIterator` is an iterator over a `ChunkedArray` which contains polars types. A `PolarsIterator` must implement `ExactSizeIterator` and `DoubleEndedIterator`."],["PolarsNumericType",""],["PolarsObject","Values need to implement this so that they can be stored into a Series and DataFrame"],["PolarsRound",""],["PolarsSingleType","Any type that is not nested"],["PolarsTemporalGroupby",""],["PolarsTruncate",""],["PolarsUpsample",""],["QuantileAggSeries",""],["Range",""],["RenameAliasFn",""],["RepeatBy","Repeat the values `n` times."],["RollingAgg",""],["RollingSeries",""],["SerReader",""],["SerWriter",""],["SeriesBinaryUdf","A wrapper trait for any binary closure `Fn(Series, Series) -> PolarsResult<Series>`"],["SeriesMethods",""],["SeriesOps",""],["SeriesOpsTime",""],["SeriesSealed",""],["SeriesTrait",""],["SeriesUdf","A wrapper trait for any closure `Fn(Vec<Series>) -> PolarsResult<Series>`"],["StrConcat","Concat the values into a string array."],["TakeIterator",""],["TakeIteratorNulls",""],["TakeRandom","Random access"],["TakeRandomUtf8",""],["TemporalMethods",""],["TimeMethods",""],["ToDummies",""],["UdfSchema",""],["Utf8Methods",""],["Utf8NameSpaceImpl",""],["ValueSize",""],["VarAggSeries",""],["VecHash",""],["VecHashSingle","Ensure that the same hash is used as with `VecHash`."]],"type":[["AllowedOptimizations","AllowedOptimizations"],["ArrayRef",""],["ArrowResult","Typedef for a [`std::result::Result`] of an [`Error`]."],["BinaryChunked",""],["BooleanChunked",""],["BorrowIdxItem",""],["CloudOptions",""],["DateChunked",""],["DatetimeChunked",""],["Dummy","Dummy type, we need to instantiate all generic types, so we fill one with a dummy."],["DurationChunked",""],["FillNullLimit",""],["Float32Chunked",""],["Float64Chunked",""],["GetOutput",""],["GroupsSlice","Every group is indicated by an array where the"],["IdxArr",""],["IdxCa",""],["IdxItem",""],["IdxSize","The type used by polars to index data."],["IdxType",""],["Int16Chunked",""],["Int32Chunked",""],["Int64Chunked",""],["Int8Chunked",""],["LargeBinaryArray",""],["LargeListArray",""],["LargeStringArray",""],["ListChunked",""],["ObjectChunked",""],["PlHashMap",""],["PlHashSet",""],["PlIdHashMap","This hashmap has the uses an IdHasher"],["PlIndexMap",""],["PlIndexSet",""],["PolarsResult",""],["SchemaRef",""],["TimeChunked",""],["TimeZone",""],["UInt16Chunked",""],["UInt32Chunked",""],["UInt64Chunked",""],["UInt8Chunked",""],["Utf8Chunked",""]]};